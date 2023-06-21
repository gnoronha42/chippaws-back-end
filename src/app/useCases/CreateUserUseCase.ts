import User from "../models/User";

class CreateUserUseCase {
  async execute(userData: {
    name: string;
    email: string;
    age: number;
  }): Promise<void> {
    try {
      const newUser = new User(userData);
      await newUser.save();
      console.log("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      throw error;
    }
  }
}

export default CreateUserUseCase;
