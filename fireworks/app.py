import pymongo
import urllib.parse
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from flask import request
from bson import ObjectId, json_util
from fireworks import LaunchPad
from pymatgen.core import structure
from pymatgen.io.vasp.inputs import Poscar
from pymatgen.symmetry.kpath import KPathSeek
from pymatgen.symmetry.analyzer import SpacegroupAnalyzer
from pymatgen.io.vasp.sets import MPStaticSet
from atomate2.vasp.jobs.core import DielectricMaker, HSERelaxMaker, HSEStaticMaker, HSETightRelaxMaker, MDMaker, NonSCFMaker, RelaxMaker, StaticMaker, TightRelaxMaker, TransmuterMaker
from atomate2.vasp.flows.core import BandStructureMaker, DoubleRelaxMaker, HSEBandStructureMaker, HSELineModeBandStructureMaker, HSEOpticsMaker, HSEUniformBandStructureMaker, LineModeBandStructureMaker, OpticsMaker, RelaxBandStructureMaker, UniformBandStructureMaker
from atomate2.vasp.powerups import update_user_incar_settings, update_user_kpoints_settings, update_user_potcar_functional, update_user_potcar_settings, use_auto_ispin
from jobflow.managers.fireworks import flow_to_workflow
from fireworks.queue.queue_launcher import launch_rocket_to_queue
from fireworks.utilities.fw_serializers import load_object_from_file
from fireworks.core.fworker import FWorker

username = urllib.parse.quote_plus('fpupdater')
password = urllib.parse.quote_plus('pwd')
client = pymongo.MongoClient('mongodb://%s:%s@localhost:27017/' % (username, password))
db = client["highThroughtputDataBase"]
collection = db["firstPrinciplesDataCollection"]

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/workflow', methods=['POST', 'GET'])
@cross_origin()
def workflow():
    error = None
    if request.method == 'POST':
        queryid = request.json["_id"]
        queryProperty = request.json["property"]
        doc = collection.find_one({"_id": ObjectId(queryid)})
        inputStructureCif = doc["structure"]
        struct = structure.IStructure.from_str(input_string=inputStructureCif, fmt="cif")
        analyzer = SpacegroupAnalyzer(structure=struct, symprec=0.001,angle_tolerance=2.0)
        struct = analyzer.get_primitive_standard_structure()
        #kpath = KPathSeek(structure=struct)
        #poscar = Poscar(structure=struct, comment=queryid)
        #print(struct)
        vaspInputSet = MPStaticSet(structure=struct, user_potcar_functional="PBE_54")
        #print(vaspInputSet.poscar)
        #print(vaspInputSet.incar)
        #print(vaspInputSet.kpoints)
        print(vaspInputSet.potcar.as_dict())
        #dirOutput = "/home/wangzhi/Projects/my-firework-server/INPUTS/" + queryid
        #vaspInputSet.write_input(output_dir=dirOutput)
        if (queryProperty == "gap"):
            genFlow = HSEStaticMaker().make(struct)
        elif (queryProperty == "dielec"):
            genFlow = DielectricMaker().make(struct)
        elif (queryProperty == "absorp"):
            genFlow = HSEOpticsMaker().make(struct)
        elif (queryProperty == "band"):
            genFlow = HSEBandStructureMaker().make(struct)
        elif (queryProperty == "md"):
            genFlow = MDMaker().make(struct)
        #genFlow = update_user_kpoints_settings(flow=genFlow, kpoints_updates=vaspInputSet.kpoints)
        genFlow = update_user_potcar_functional(flow=genFlow, potcar_functional="PBE_54")
        genFlow = update_user_incar_settings(flow=genFlow, incar_updates={"KPAR": 4, "NCORE": 1, "NSIM": 8})
        
        wf = flow_to_workflow(genFlow)
        lpad = LaunchPad.auto_load()
        lpad.add_wf(wf)
        myFWorker = FWorker.auto_load()
        myQAdapter = load_object_from_file("../atomate2/config/my_qadapter.yaml")
        launch_rocket_to_queue(launchpad=lpad,fworker=myFWorker,qadapter=myQAdapter,reserve=False)

        returnJson = {'poscar': str(vaspInputSet.poscar), 'incar': str(vaspInputSet.incar), 'kpoints': str(vaspInputSet.kpoints), 'potcar': vaspInputSet.potcar.as_dict()}
        return returnJson