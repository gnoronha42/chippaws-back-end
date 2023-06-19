import mongoose, { ConnectOptions } from "mongoose";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydatabase");
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

export { connect };
