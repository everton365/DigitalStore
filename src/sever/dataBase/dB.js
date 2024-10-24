import express from "express";
import cors from "cors";
import { carrinho } from "../../../models/carrinho.js";
import bodyParser from "body-parser";
import sequelize from "./testdb.js";
import { DataTypes } from "sequelize";

// Cria uma instância do Express
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const porta = 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");

    // Define a rota principal

    // Rota para adicionar item ao carrinho
    app.post("/", async (req, res) => {
      try {
        const { userId, productId, quantityId, price } = req.body;

        // Verifique se o item já existe no carrinho
        const itemExistente = await carrinho(sequelize, DataTypes).findOne({
          where: {
            userId,
            productId,
          },
        });

        if (itemExistente) {
          // Garante que a quantidade seja tratada como número
          const novaQuantidade = parseInt(itemExistente.quantityId, 10) + 1;

          // Atualiza a quantidade no banco de dados
          await itemExistente.update({ quantityId: novaQuantidade });

          return res.status(200).json({
            message: "Quantidade atualizada com sucesso",
            itemExistente,
          });
        }

        // Criar um novo item no carrinho usando o modelo Sequelize
        const novoCarrinho = await carrinho(sequelize, DataTypes).create({
          userId,
          productId,
          quantityId, // Adiciona o item com quantidade inicial de 1
          price,
        });

        res.status(201).json({
          message: "Item adicionado ao carrinho com sucesso",
          novoCarrinho,
        });
      } catch (error) {
        console.error("Erro ao adicionar item ao carrinho:", error);
        res
          .status(500)
          .json({ message: "Erro ao adicionar item ao carrinho", error });
      }
    });

    app.listen(porta, () => {
      console.log(`Servidor rodando na porta ${porta}`);
    });
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

startServer();
