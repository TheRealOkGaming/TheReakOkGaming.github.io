import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import session from 'express-session';
import RedisStore from 'connect-redis';
import redis from 'redis';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.OPENAI_API_KEY;
const REDIS_URL = process.env.REDIS_URL;

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

app.use(express.json());

// Configure CORS options
const corsOptions = {
    origin: 'https://therealok.com', // Change this to your frontend domain
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Configure session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    store: new RedisStore({ client: redisClient }),
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Route to handle chat requests
app.post('/api/chat', async (req, res) => {
    const { userMessage } = req.body;

    if (!userMessage) {
        return res.status(400).json({ error: "User message is required" });
    }

    // Initialize session-specific message history if not already set
    if (!req.session.messageHistory) {
        req.session.messageHistory = [
            { role: "system", content: "You are Big Chungus, a very large and powerful rabbit..." }
        ]; // Initialize with system message
    }

    // Add user message to session-specific history
    req.session.messageHistory.push({ role: "user", content: userMessage });

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

        res.json({ botResponse });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
