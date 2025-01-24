import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import User from "../models/User";
import AuditLog from "../models/AuditLog";
import generateToken from "../utils/token";


  



  export const login = async (req:Request,res:Response): Promise<any> =>{
    try{
        const {email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({message:"Admin not found."})
        }
        const ispasswordValid = await bcrypt.compare(password,existingUser.password)
        if(!ispasswordValid){
            return res.status(400).json({message:"Password Invalid."})
        }
        generateToken(res,existingUser)
        
        
    }
    catch (err: unknown) {
      if (err instanceof Error) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(400).json({ error: "An unknown error occurred" });
      }
    }
}



export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
};

export const getUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const deleteUser = async (req: Request, res: Response): Promise<any> => {
  const { id } = req.params;
  const user = await User.findById(id);
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the user has the role of "admin"
    if (user.role === "admin") {
      return res.status(403).json({ error: "You cannot delete an admin user" });
    }

    await User.findByIdAndDelete(id);
  if (!user) return res.status(404).json({ error: "User not found" });

  // Log action
  await AuditLog.create({ action: `Deleted user ${id}`, adminId: req.id });

  res.status(204).end();
};


