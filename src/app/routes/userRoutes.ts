import express, { Request, Response } from "express";
import { createUser, getUsers } from "../repositories/userRepository";
import CreateUserUseCase from "../useCases/CreateUserUseCase";

const router = express.Router();
const createUserUseCase = new CreateUserUseCase();

/**
 * @swagger
 * /users:
 *   post:
 *     description: Cria um novo usuário
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         description: Dados do usuário
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: Usuário cadastrado com sucesso
 */
router.post("/", async (req: Request, res: Response) => {
  // seu código aqui
});

/**
 * @swagger
 * /users:
 *   get:
 *     description: Retorna todos os usuários
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Sucesso na requisição
 */
router.get("/", async (_: Request, res: Response) => {
  // seu código aqui
});

// Resto do seu código aqui

export default router;
