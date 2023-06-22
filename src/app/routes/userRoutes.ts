import express, { Request, Response } from "express";
import { createUser, getUsers } from "../repositories/userRepository";
import CreateUserUseCase from "../useCases/CreateUserUseCase";

const router = express.Router();
const createUserUseCase = new CreateUserUseCase();

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;
    await createUserUseCase.execute({ name, email, age });
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
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
const mongoose = require("mongoose");
if (mongoose.connection.readyState === 1) {
  console.log("Banco de dados conectado");
} else {
  console.log("Banco de dados desconectado");
}

export default router;
