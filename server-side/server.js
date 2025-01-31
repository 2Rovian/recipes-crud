import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routes/all_routes.js';

dotenv.config();
const app = express();

// Middlewares

// Configurar o CORS para aceitar requisições do frontend
app.use(cors({
    origin: 'http://localhost:5173',  // Permitindo apenas o frontend
    methods: 'GET, POST',            // Permitindo apenas os métodos necessários
    allowedHeaders: 'Content-Type',  // Permitindo os cabeçalhos necessários
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

