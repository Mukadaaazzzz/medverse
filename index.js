const express = require("express");
const cors = require("cors");
const geminiRoutes = require("./routes/geminiRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
};

// Apply CORS middleware with options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use("/api", geminiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
