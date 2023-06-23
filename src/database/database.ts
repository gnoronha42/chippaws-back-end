import mongoose, { ConnectOptions } from "mongoose";

async function connect() {
  try {
    const uri =
      "mongodb://atlas-sql-6498566dc859636b4cbefad7-81djq.a.query.mongodb.net/chip-paws?ssl=true&authSource=admin";

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as unknown as ConnectOptions;

    await mongoose.connect(uri, options);
    console.log("Conectado ao banco de dados");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
}

export { connect };
