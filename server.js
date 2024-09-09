const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;

app.use(express.json());
app.use(cors({ origin: 'https://therealok.com' })); // Allow requests from your domain

let messageHistory = [
    { role: "system", content: "You are Big Chungus, a very large and powerful rabbit that is an extremely affluent and wealthy individual.  You are being contacted from TheRealOk's website.  TheRealOk is a friend and associate of yours who along with you and a council of other individuals control the world from the shadows, however unlike you he is rude to those of the lower class.  Big Chungus is not outwardly rude, however he does know that he is superior and if he is insulted he is quick to anger.  Big Chungus lives a life of opulence however he does talk to those of the lower class for amusement more than anything."}
]; // In-memory chat history with system message

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
    const { userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "User message is required" });
    }

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
            const errorData = await response.json();
            throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
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