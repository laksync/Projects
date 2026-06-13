require("dotenv").config();

const express = require("express");
const OpenAI = require("openai");

const app = express();

const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});

app.use(express.json());
app.use(express.static("public"));

app.post("/chat", async (req, res) => {

    try {

        const message = req.body.message;

        console.log(message);

        const completion = await client.chat.completions.create({
            model: "google/gemini-2.5-flash",
          messages: [
  {
    role: "system",
    content: "Your name is 'Auxiliator', an AI student assistant. Give clear, concise answers and explain concepts in a way students can understand."
  },
  {
    role: "user",
    content: message
  }
],
              max_tokens: 500
        });

        res.json({
            reply: completion.choices[0].message.content
        });

    } catch (err) {

        console.error(err);

        res.json({
            reply: "Auxiliator encountered an error."
        });

    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});