import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
import connectDB from './config/db';
import adminRoutes from './routes/adminRoutes';
import crossBackendRoutes from './routes/crossBackendRoutes';
import cookieParser from "cookie-parser"

const app = express();
const port = process.env.PORT || 6000;
app.use(express.json());
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World! Admin');
});













app.use("/auth", adminRoutes);
app.use("/users", adminRoutes);
app.use("/audit", crossBackendRoutes);
  
  
   
  



app.listen(port, () => {
  connectDB();
  console.log(`Server is running at http://localhost:${port}`);
});
