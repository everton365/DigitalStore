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
  return (
    <section className="container-resumo">
      <h1>RESUMO</h1>
      <section className="container-section-resumo">
        <div>
          <p>Subtotal</p>
          <p>Frete</p>
          <p>Descontos</p>
        </div>
        <div>
          <p>R${valor1}</p>
          <p>R${valor}</p>
          <p>R${valor}</p>
        </div>
      </section>
      <div>
        <h2>TOTAL</h2>
        <p>R${valor}</p>
        <div>
          <p>ou 10x de R${valor} sem juros</p>
        </div>
        <button>Continuar</button>
      </div>
    </section>
  );
}

export default Resumo;
