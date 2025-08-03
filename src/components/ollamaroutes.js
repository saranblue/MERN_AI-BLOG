const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { prompt } = req.body;

  try {
    const ollamaRes = await axios.post("http://localhost:11434/api/generate", {
      model: "mistral", // or "mistral", "gemma", etc.
      prompt: prompt,
      stream: false,
    });

    res.json({ response: ollamaRes.data.response });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Ollama generation failed" });
  }
});

module.exports = router;
