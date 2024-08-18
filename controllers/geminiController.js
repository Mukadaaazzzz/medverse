const geminiService = require("../services/geminiService");

const generateContent = async (req, res) => {
  const { prompt } = req.body;

  try {
    const content = await geminiService.getGeneratedContent(prompt);
    res.status(200).json({ content });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  generateContent,
};
