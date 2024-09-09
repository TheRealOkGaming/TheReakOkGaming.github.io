require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;

app.use(express.json());

let messageHistory = []; // In-memory chat history (not persistent across server restarts)

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
    const { userMessage } = req.body;

    // Add user message to history
    messageHistory.push({ role: "user", content: userMessage });

    const API_URL = "https://api.openai.com/v1/chat/completions";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: messageHistory
            })
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        // Add bot response to history
        messageHistory.push({ role: "assistant", content: botResponse });

        res.json({ botResponse });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});