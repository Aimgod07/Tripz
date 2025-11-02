import express from 'express';
import { config } from 'dotenv';
import dbconnection from './database/mongo.js';
import cors from 'cors';
import hotelrouter from './router/hotelrouter.js';
import ticketrouter from './router/ticketrouter.js';



config({path:"./config/config.env"});
const app = express();

app.use(cors(
    {
        origin: [process.env.FRONTEND_URL, "http://localhost:5174"],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/hotel', hotelrouter);
app.use('/api/v1/ticket', ticketrouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});
dbconnection();
export default app;