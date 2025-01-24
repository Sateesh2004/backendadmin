import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bcrypt from "bcryptjs"
dotenv.config({ path: '.env.local' });
import connectDB from './config/db';
import adminRoutes from './routes/adminRoutes';
import crossBackendRoutes from './routes/crossBackendRoutes';
import cookieParser from "cookie-parser"
import User from './models/User';
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! User');
});













app.use("/auth", adminRoutes);
app.use("/audit", crossBackendRoutes);
  
  
   
  



app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
