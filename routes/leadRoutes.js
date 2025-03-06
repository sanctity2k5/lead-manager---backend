const express = require("express");
const router = express.Router();
const { createLead, getAllLeads } = require("../controllers/leadController");

router.post("/", createLead);
router.get("/", getAllLeads);

module.exports = router;
