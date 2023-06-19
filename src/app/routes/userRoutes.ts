import express, { Request, Response } from "express";
import { createUser, getUsers } from "../repositories/userRepository";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

router.get("/", async (_: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
    res.status(500).json({ error: "Erro ao obter usuários" });
  }
});

export default router;
