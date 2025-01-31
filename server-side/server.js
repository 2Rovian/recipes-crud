import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/all_routes.js';

dotenv.config();
const app = express();

// Middlewares

// Configuração do CORS
app.use(cors({
    origin: 'http://localhost:5173', // Permite apenas requisições do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
}));

app.use(express.json())

// Rotas
app.use('/api', router);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(process.env.PORT, () => {
            console.log("Server is running on port", process.env.PORT);
        });
    })
    .catch((error) => console.log("Error connecting to the DB:", error));

