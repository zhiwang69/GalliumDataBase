import pymongo
import urllib.parse
from mp_api.client import MPRester

"""
Here is the full list of fields for items returned by mp_api.client.MPRester.materials.summary.search
and the we store them in MongoDB

builder_meta                                      : STR
nsites                                            : INT
elements                                          : LIST[STR]
nelements                                         : INT
composition                                       : DICT
composition_reduced                               : DICT
formula_pretty                                    : STR
formula_anonymous                                 : STR
chemsys                                           : STR
volume                                            : FLOAT
density                                           : FLOAT
density_atomic                                    : FLOAT
symmetry                                          : DICT
property_name                                     : STR
material_id                                       : STR
deprecated                                        : BOOL
deprecation_reasons                               : STR
last_updated                                      : DROPPED
origins                                           : DROPPED
warnings                                          : DROPPED
structure                                         : STR (using 'CIF' format)
task_ids                                          : LIST[STR]
uncorrected_energy_per_atom                       : FLOAT
energy_per_atom                                   : FLOAT
formation_energy_per_atom                         : FLOAT
energy_above_hull                                 : FLOAT
is_stable                                         : FLOAT
equilibrium_reaction_energy_per_atom              : FLOAT
decomposes_to                                     : STR
xas                                               : DROPPED
grain_boundaries                                  : DROPPED
band_gap                                          : FLOAT
cbm                                               : FLOAT
vbm                                               : FLOAT
efermi                                            : FLOAT
is_gap_direct                                     : BOOL
is_metal                                          : BOOL
es_source_calc_id                                 : STR
bandstructure                                     : WIP
dos                                               : WIP
dos_energy_up                                     : DROPPED
dos_energy_down                                   : DROPPED
is_magnetic                                       : BOOL
ordering                                          : STR
total_magnetization                               : FLOAT
total_magnetization_normalized_vol                : FLOAT
total_magnetization_normalized_formula_units      : FLOAT
num_magnetic_sites                                : INT
num_unique_magnetic_sites                         : INT
types_of_magnetic_species                         : STR
bulk_modulus                                      : DROPPED
shear_modulus                                     : DROPPED
universal_anisotropy                              : FLOAT
homogeneous_poisson                               : FLOAT
e_total                                           : FLOAT
e_ionic                                           : FLOAT
e_electronic                                      : FLOAT
n                                                 : FLOAT
e_ij_max                                          : DROPPED
weighted_surface_energy_EV_PER_ANG2               : FLOAT
weighted_surface_energy                           : FLOAT
weighted_work_function                            : FLOAT
surface_anisotropy                                : FLOAT
shape_factor                                      : FLOAT
has_reconstructed                                 : BOOL
possible_species                                  : STR
has_props                                         : DROPPED
theoretical                                       : BOOL
database_IDs                                      : DICT
"""

# Specify keys (fields) into different groups
allFields = ['builder_meta', 'nsites', 'elements', 'nelements', 'composition', 'composition_reduced', 'formula_pretty', 'formula_anonymous', 'chemsys', 'volume', 'density', 'density_atomic', 'symmetry', 'property_name', 'material_id', 'deprecated', 'deprecation_reasons', 'last_updated', 'origins', 'warnings', 'structure', 'task_ids', 'uncorrected_energy_per_atom', 'energy_per_atom', 'formation_energy_per_atom', 'energy_above_hull', 'is_stable', 'equilibrium_reaction_energy_per_atom', 'decomposes_to', 'xas', 'grain_boundaries', 'band_gap', 'cbm', 'vbm', 'efermi', 'is_gap_direct', 'is_metal', 'es_source_calc_id', 'bandstructure', 'dos', 'dos_energy_up', 'dos_energy_down', 'is_magnetic', 'ordering', 'total_magnetization', 'total_magnetization_normalized_vol', 'total_magnetization_normalized_formula_units', 'num_magnetic_sites', 'num_unique_magnetic_sites', 'types_of_magnetic_species', 'bulk_modulus', 'shear_modulus', 'universal_anisotropy', 'homogeneous_poisson', 'e_total', 'e_ionic', 'e_electronic', 'n', 'e_ij_max', 'weighted_surface_energy_EV_PER_ANG2', 'weighted_surface_energy', 'weighted_work_function', 'surface_anisotropy', 'shape_factor', 'has_reconstructed', 'possible_species', 'has_props', 'theoretical', 'database_IDs']
droppedFields = ['origins', 'warnings', 'xas', 'grain_boundaries', 'dos_energy_up', 'dos_energy_down', 'bulk_modulus', 'shear_modulus', 'e_ij_max', 'has_props', 'last_updated']
noConvertFields = ['nsites', 'nelements', 'formula_pretty', 'formula_anonymous', 'chemsys', 'volume', 'density', 'density_atomic', 'property_name', 'deprecated', 'uncorrected_energy_per_atom', 'energy_per_atom', 'formation_energy_per_atom', 'energy_above_hull', 'is_stable', 'equilibrium_reaction_energy_per_atom', 'band_gap', 'cbm', 'vbm', 'efermi', 'is_gap_direct', 'is_metal', 'is_magnetic', 'ordering', 'total_magnetization', 'total_magnetization_normalized_vol', 'total_magnetization_normalized_formula_units', 'num_magnetic_sites', 'num_unique_magnetic_sites', 'universal_anisotropy', 'homogeneous_poisson', 'e_total', 'e_ionic', 'e_electronic', 'n', 'weighted_surface_energy_EV_PER_ANG2', 'weighted_surface_energy', 'weighted_work_function', 'surface_anisotropy', 'shape_factor', 'has_reconstructed', 'theoretical', 'database_IDs']
toStringFields = ['builder_meta', 'deprecation_reasons', 'decomposes_to', 'material_id', 'es_source_calc_id']
toStringListFields = ['elements', 'task_ids', 'types_of_magnetic_species', 'possible_species']
needSpecialTreatmentFeilds = ['composition', 'composition_reduced', 'symmetry', 'structure']

username = urllib.parse.quote_plus('fpupdater')
password = urllib.parse.quote_plus('w@ngLow5328')
client = pymongo.MongoClient('mongodb://%s:%s@localhost:27017/' % (username, password))
db = client["highThroughtputDataBase"]
collection = db["materialsDemo"]

#elements = ["Ga", "O"]
#query = {"elements": {"$all": elements, "$size": len(elements)}}
#itemCount = collection.count_documents(query)
#print("Found " + str(itemCount) +" result(s)")
#if ( itemCount > 0 ):
#    for doc in collection.find(query):
#        print(doc["material_id"], ": ", doc["formula_pretty"])
#exit(0)

with MPRester("ohCopOjiN3r4annVghRifgzr5GEBXcW9") as mpr:
    docs = mpr.materials.summary.search(elements=["Ga", "O"])
    #docs = mpr.materials.summary.search(material_ids=["mp-886"])
    itemIndex = 0
    itemNew = 0
    itemOld = 0
    for example_doc in docs:
        itemIndex += 1
        print(" Task #",itemIndex," - MP entry ", str(getattr(example_doc, 'material_id')))
        testIfAlreadySaved = {"material_id": str(getattr(example_doc, "material_id"))}
        itemCount = collection.count_documents(testIfAlreadySaved)
        if (itemCount > 0):
            itemOld += 1
            print("    [WARNING] " + str(testIfAlreadySaved["material_id"]) + " already exists; I will skip this one.")
            #exit(0)
        else:
            data = {}
            for a in allFields:
                rawData = getattr(example_doc, a)
                if a in droppedFields:
                # dropped
                    continue
                elif a in noConvertFields:
                    data[a] = rawData
                elif a in toStringFields:
                    data[a] = str(rawData)
                elif a in toStringListFields:
                    data[a] = [str(obj) for obj in rawData]
                elif a in needSpecialTreatmentFeilds:
                    if (a == 'structure'):
                        data[a] = rawData.to(fmt="cif")
                    elif (a == 'composition' or a == 'composition_reduced'):
                        data[a] = rawData.as_dict()
                    elif (a == 'symmetry'):
                        data[a] = {'symbol': rawData.symbol, 'number': rawData.number, 'point_group': rawData.point_group, 'crystal_system': str(rawData.crystal_system)}
                    else:
                        print("    [WARNING] There is no rule for key ", a)
                else:
                    print("    [WARNING] There is no rule for key ", a)
            collection.insert_one(data)
            itemNew += 1
            print("    New material; written into DB.")
    print("Jobs done. New entry(s) ", itemNew, ', skipped entry(s) ', itemOld)