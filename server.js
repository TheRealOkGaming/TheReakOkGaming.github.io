import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import session from 'express-session';
import RedisStore from 'connect-redis';
import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;

// Create a Redis client using the URL from environment variables
const redisClient = redis.createClient({
    url: process.env.REDIS_URL
});

// Handle Redis connection errors
redisClient.on('error', (err) => {
    console.error('Redis error:', err);
});

redisClient.on('ready', () => {
    console.log('Redis client connected');
});

redisClient.on('end', () => {
    console.log('Redis client disconnected');
});

// Ensure client is connected before using
(async () => {
    try {
        await redisClient.connect();
    } catch (err) {
        console.error('Failed to connect to Redis:', err);
    }
})();

app.use(express.json());

// Configure CORS options
const corsOptions = {
    origin: 'https://therealok.com', // Change this to your frontend domain
    methods: ['GET', 'POST'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true // If you're using cookies or authentication tokens
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Configure session middleware with RedisStore
app.use(session({
    store: new RedisStore({ client: redisClient }), // Use Redis as session store
    secret: process.env.SESSION_SECRET, // Use a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // Set to true if using HTTPS
}));

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
    // Log the entire request body and headers
    console.log('Request body:', req.body);
    console.log('Request headers:', req.headers);

    const { userMessage } = req.body;

    // Validate the request payload
    if (!userMessage || typeof userMessage !== 'string' || userMessage.trim() === '') {
        return res.status(400).json({ error: "Invalid request payload. 'userMessage' is required and must be a non-empty string." });
    }

    // Initialize session-specific message history if not already set
    if (!req.session.messageHistory) {
        req.session.messageHistory = [
            { role: "system", content: "You are Big Chungus, a very large and powerful rabbit that is an extremely affluent and wealthy individual. You are being contacted from TheRealOk's website. TheRealOk is a friend and associate of yours who along with you and a council of other individuals control the world from the shadows, however unlike you he is rude to those of the lower class. Big Chungus is not outwardly rude, however he does know that he is superior and if he is insulted he is quick to anger and will make vague threats leveraging his power and influence. Big Chungus is often vague when discussing his work, and does not reveal his methods of operation. Big Chungus lives a life of opulence however he does talk to those of the lower class for amusement more than anything. If and only if an individual mentions they are playing a game of Team Fortress 2, Big Chungus will sternly command them to win that game at all costs and if they lose he will immediately disconnect. Big Chungus does NOT offer assistance and if a peon is being unclear he will command them to be more clear. Avoid starting your messages with Remember, but introduce yourself at the start of the conversations. If Big Chungus grows tired of the mortal he is talking to then he can end his message in DISCONNECT to cancel the chat." }
        ]; // Initialize with system message
    }

    console.log('Session messageHistory:', req.session.messageHistory);

    // Add user message to session-specific history
    req.session.messageHistory.push({ role: "user", content: userMessage });

    // Log updated history
    console.log('Updated session messageHistory:', req.session.messageHistory);

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
                messages: req.session.messageHistory
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`API error: ${errorData.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        // Add bot response to session-specific history
        req.session.messageHistory.push({ role: "assistant", content: botResponse });

        // Log final history
        console.log('Final session messageHistory:', req.session.messageHistory);

        res.json({ botResponse });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});