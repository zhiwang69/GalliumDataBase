const express = require("express");
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const username = encodeURIComponent("fpupdater");
const password = encodeURIComponent("pwd");
const dbName = "highThroughtputDataBase";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const uri = `mongodb://${username}:${password}@localhost:27017/${dbName}?authSource=admin`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 });

client.connect()
    .then(() => {
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const collection = db.collection("materialsDemo");

        app.post("/search", (req, res) => {
            const query = req.body;
            console.log("Query:", query);
            collection.find(query).toArray()
                .then((results) => {
                    res.json(results);
                }).catch((err) => {
                    console.error("Error querying MongoDB:", err);
                    res.status(500).send("Error querying MongoDB");
                });
        });

        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });
