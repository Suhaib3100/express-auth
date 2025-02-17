require("dotenv").config(); // Load environment variables

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Rate limiter (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.json({ message: "🚀 Express Server Running on Vercel!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export for Vercel
module.exports = app;
