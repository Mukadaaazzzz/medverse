const express = require("express");
const router = express.Router();
const geminiController = require("../controllers/geminiController");

router.post("/generate-content", geminiController.generateContent);

module.exports = router;
