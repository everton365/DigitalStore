import React, { useEffect, useState, useContext } from "react";
import "./resumo.css";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext.js";
import Loading from "../../components/Loading/Loading.jsx";
import Header from "../../components/header/header.jsx";

function Resumo({ valor1 }) {
  const [valor, setValor] = useState(100); // O valor inicial é 100

  // Função para atualizar o valor
  const atualizarValor = () => {
    setValor((prevValor) => prevValor + 10); // Incrementa o valor em 10
  };
  const parcela = parseFloat((valor1 / 10).toFixed(2));
  const formatoParcela = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(parcela);
  const formatoValor1 = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor1);

  return (
    <section className="container-resumo">
      <h1>RESUMO</h1>
      <section className="container-section-resumo">
        <div>
          <p>Subtotal</p>
          <p>Frete</p>
          <p>Descontos</p>
          <p id="total">Total</p>
        </div>
        <div>
          <p>R${formatoValor1}</p>
          <p>R${valor}</p>
          <p>R${valor}</p>
          <p id="total1">R${formatoValor1}</p>
        </div>
      </section>
      <div>
        <div>
          <p className="parcelas">ou 10x de R${formatoParcela} sem juros</p>
        </div>
        <button id="bt1">Continuar</button>
      </div>
    </section>
  );
}

export default Resumo;
