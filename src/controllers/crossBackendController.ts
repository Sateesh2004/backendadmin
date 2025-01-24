import { Request, Response } from "express";

export const fetchNotesFromUserBackend = async (req: Request, res: Response): Promise<any> => {
  try {
    const response = await fetch(`${process.env.BACKENDUSER_URL}/notes/notesreqbyadmin`);
    
    if (response.ok) {
      const data = await response.json(); // Parse the response as JSON
      console.log("Request went");
      console.log(data); // Log the actual data
      return res.status(200).json(data);
    } else {
      return res.status(response.status).json({ error: "Failed to fetch notes from User Backend" });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).json({ error: "Failed to fetch notes from User Backend" });
  }
};
