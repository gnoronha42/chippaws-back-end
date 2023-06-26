import express, { Request, Response } from "express";
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

export default router;
