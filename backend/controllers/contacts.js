const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection("contacts").find();
    result.toArray().then((list) => {
        res.setHeader("Content-Type", "application/json");
        res.status(201).json(list);
    })
}

const getSingleContacts =  async (req, res, next)  =>{
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection("contacts").find({_id:contactId});
    result.toArray().then((list) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list);
    })
}

module.exports = {getAllContacts, getSingleContacts};