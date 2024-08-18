const callGeminiAPI = require("../utils/gemini");

async function getGeneratedContent(prompt) {
  try {
    const generatedContent = await callGeminiAPI(prompt);
    return generatedContent;
  } catch (error) {
    throw new Error("Failed to generate content from Gemini API");
  }
}

module.exports = {
  getGeneratedContent,
};
