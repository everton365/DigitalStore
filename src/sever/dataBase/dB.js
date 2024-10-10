import express from "express";
import cors from "cors";

// Cria uma instância do Express
const app = express();
app.use(cors());
app.use(express.json());
// Define a rota principal
app.get("/", (req, res) => {
  res.send("Servidor Node.js está funcionando com sucesso!");
});

app.post("/salvar-compra", (req, res) => {
  const { productId } = req.body;

  if (!productId) {
    return res.status(400).send("Product ID não fornecido.");
  }

  // Simula salvar o productId (pode ser em um banco de dados)
  console.log("ProductId recebido:", productId);

  res.send(`ProductId ${productId} salvo com sucesso!`);
});

// Define a porta para o servidor
const PORT = process.env.PORT || 3000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
