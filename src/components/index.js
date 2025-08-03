const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ollamaRoutes = require("./routes/ollamaroutes");
require("dotenv").config(); // To load .env (for JWT_SECRET)

const authRoutes = require("./routes/authRoutes"); // 👈 import this

const app = express();
app.use(cors());
app.use(express.json());

// Use the routes
app.use("/api/auth", authRoutes); // 👈 now /signup and /login will work
app.use("/api/ollama", ollamaRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/userdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Optional test route (existing one you had)
app.post("/api/users", async (req, res) => {
  const { name, age, number } = req.body;
  const user = new mongoose.model("User", { name: String, age: String, number: String });
  await new user(req.body).save();
  res.send({ message: "User saved!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
