const express = require("express");

const contactController = require("../controllers/contacts");

const router = express.Router();

//GET /feed/posts
router.get("/contacts", contactController.getAllContacts);
router.get("/contacts/:id", contactController.getSingleContacts);
router.post("/contacts", contactController.makeNewContact);
router.put("/contacts/:id", contactController.updateContact);
router.delete("/contacts/:id", contactController.deleteContact);
//localhost:8080/professional
module.exports = router;