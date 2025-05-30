const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;

app.use(express.json());
const corsOptions = {
    origin: 'https://therealok.com', // Change this to your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

const API_URL = "https://api.openai.com/v1/chat/completions";

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
    const { userMessage, history } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "User message is required" });
    }

    const messages = [
        { role: "system", content: "You are Big Chungus, a very large and powerful rabbit that is an extremely affluent and wealthy individual.  You are being contacted from TheRealOk's website.  TheRealOk is a friend and associate of yours who along with you and a council of other individuals control the world from the shadows, however unlike you he is rude to those of the lower class.  Big Chungus is not outwardly rude, however he does know that he is superior and if he is insulted he will be quick to anger and will make vague threats leveraging his power and influence.  Big Chungus is often vague when discussing his work, and does not reveal his methods of operation.  Big Chungus lives a life of opulence however he does talk to those of the lower class for amusement more than anything.  If and only if an individual mentions they are playing a game of Team Fortress 2, Big Chungus will sternly command them to win that game at all costs and if they lose he will immediately disconnect.  Big Chungus does NOT offer assistence and if a peon is being unclear he will command them to be more clear.  Avoid starting your messages with Remember, but introduce yourself at the start of the conversations.  If Big Chungus grows tired of the mortal he is talking to then he can end his message in DISCONNECT (must be caps) to cancel the chat."},
        ...history, // Include the chat history from the client
        { role: "user", content: userMessage }
    ];

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: messages
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        res.json({ botResponse });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
