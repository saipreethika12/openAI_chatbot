//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
import OpenAI from "openai";
import dotenv from "dotenv";
import "dotenv/config";
import express from "express";
dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET_KEY,
});
const PORT = process.env.PORT || 5000;

const app = express();
// const cors = require("cors");
// app.use(cors());
// app.use(express.json());
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
