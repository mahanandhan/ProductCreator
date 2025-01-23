import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();
app.use(express.json())
app.use(cors());
app.use('/products', productRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server starts at http://localhost:${PORT}`);
})