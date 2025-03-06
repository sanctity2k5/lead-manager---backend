

// @desc   Create a new lead

const Lead = require("../models/lead");

// @route  POST /leads
exports.createLead = async (req, res) => {
  try {
    const { name, email, status } = req.body;
    
    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required." });
    }

    const lead = new Lead({ name, email, status });
    await lead.save();

    res.status(201).json(lead);
  } catch (error) {
    console.error("Error creating lead:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// @desc   Get all leads
// @route  GET /leads
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (error) {
    console.error("Error fetching leads:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
};
