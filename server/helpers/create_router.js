const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function (collection) {
    const router = express.Router();
    //SHOW ROUTE 
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    router.post('/', (req, res) => {
    const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => {
            newData["_id"] = result["insertedId"]
            res.json(newData)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err});
        });
    });

    //DELETE
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne({ _id: ObjectId(id) })
        .then(() => collection.find().toArray())
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });
return router;
};
module.exports = createRouter;