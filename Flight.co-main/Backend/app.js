import express from 'express';
import { config } from 'dotenv';
import OpenAI from "openai";
import dbconnection from './database/mongo.js';
import cors from 'cors';
import hotelrouter from './router/hotelrouter.js';
import ticketrouter from './router/ticketrouter.js';
import bodyParser from 'body-parser';



config({path:"./config/config.env"});
const app = express();
app.use(bodyParser.json());

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",  // 👈 Important
  apiKey: process.env.OPENROUTER_API_KEY,
  defaultHeaders: {
    "HTTP-Referer": "http://localhost:5173", // your frontend URL (important for free-tier tracking)
    "X-Title": "AI Trip Planner",
  },
});

app.use(cors(
    {
        origin: [process.env.FRONTEND_URL, "http://localhost:5174"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/plan-trip", async (req, res) => {
  const { destination, travelDate, budget } = req.body;

 const prompt = `
Generate trip recommendations in JSON format:
{
  "hotels": [{"name": "", "rating": "", "price": ""}],
  "flights": [{"airline": "", "price": "", "from": ""}],
  "restaurants": [{"name": "", "type": "", "rating": ""}]
}

Destination: ${destination}
Date: ${travelDate}
budget: ${budget}
`;


  try {
    const response = await client.chat.completions.create({
      model: "mistralai/mistral-7b-instruct", // You can switch to any available model
      messages: [{ role: "user", content: prompt }],
    });

    const aiResponse = response.choices[0].message.content;
    res.json({ aiPlan: aiResponse });
  } catch (error) {
    console.error("OpenRouter error:", error);
    res.status(500).json({ error: "AI request failed" });
  }
});

app.use('/api/v1/hotel', hotelrouter);
app.use('/api/v1/ticket', ticketrouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
dbconnection();
export default app;