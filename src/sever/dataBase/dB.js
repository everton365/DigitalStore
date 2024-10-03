import express from "express";
import cors from "cors";

// Cria uma instância do Express
const app = express();
app.use(cors());
// Define a rota principal
app.get("/", (req, res) => {
  res.send("Servidor Node.js está funcionando com sucesso!");
});

// Define a porta para o servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
