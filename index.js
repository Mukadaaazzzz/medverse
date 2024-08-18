const express = require("express");
const cors = require("cors");
const geminiRoutes = require("./routes/geminiRoutes");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration for multiple origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://medverseproject.netlify.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  credentials: true, // If you're dealing with cookies or authentication
};

// Apply CORS middleware with the updated options
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use("/api", geminiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
