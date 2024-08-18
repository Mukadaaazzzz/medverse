require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function callGeminiAPI(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text || "No response received from the model.";
  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    throw new Error("Failed to fetch response from Gemini API");
  }
}

module.exports = callGeminiAPI;
