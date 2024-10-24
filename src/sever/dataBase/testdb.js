import { Sequelize } from "sequelize";
import config from "../../../config/config.json" assert { type: "json" }; // Ajuste o caminho conforme necessário

// Determine o ambiente (development, test ou production)
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];

// Criação da instância do Sequelize
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

// Teste de conexão
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

testConnection();

export default sequelize;
