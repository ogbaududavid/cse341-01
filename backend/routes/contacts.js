const express = require("express");

const contactController = require("../controllers/contacts");

const router = express.Router();

//GET /feed/posts
router.get("/contacts", contactController.getAllContacts);
router.get("/userContact/:id", contactController.getSingleContacts);
//localhost:8080/professional
module.exports = router;