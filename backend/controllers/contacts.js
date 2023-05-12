const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;
const errorMsg = "An error occured.";

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().db().collection("contacts").find();
    result.toArray().then((list) => {
        res.setHeader("Content-Type", "application/json");
        res.status(201).json(list);
    })
}

const getSingleContacts =  async (req, res)  =>{
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection("contacts").find({_id:contactId});
    result.toArray().then((list) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(list);
    })
}

const makeNewContact = async (req, res) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection("contacts").insertOne(contact);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || errorMsg);
    }
}

const updateContact =  async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = await mongodb.getDb().db().collection("contacts").replaceOne({_id: userId}, contact);
    console.log(response);
    if(response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || errorMsg);
    }
};

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection("contacts").deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || errorMsg);
    }
};

module.exports = {getAllContacts, getSingleContacts, makeNewContact, updateContact, deleteContact};