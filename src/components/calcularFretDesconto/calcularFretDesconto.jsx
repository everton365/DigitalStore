import React, { useState } from "react";
import "./calcularFretDesconto.css"; // Importe o arquivo CSS

function CalcularFretDesconto() {
  const [cupom, setCupom] = useState("");
  const [frete, setFrete] = useState("");

  const handleCupomChange = (e) => setCupom(e.target.value);
  const handleFreteChange = (e) => setFrete(e.target.value);
  const aplicarCupom = () => {
    console.log(`Cupom aplicado: ${cupom}`);
  };

  const calcularFrete = () => {
    console.log(`CEP para calcular o frete: ${frete}`);
  };

  return (
    <section className="containerFrete">
      <div className="form-group">
        {/* Input de Cupom */}

        <div className="input-wrapper">
          <label htmlFor="cupom" className="label">
            Cupom de Desconto
          </label>
          <input
            id="cupom"
            type="text"
            value={cupom}
            onChange={handleCupomChange}
            placeholder="Insira seu cupom"
            className="input-field"
          />
        </div>
        <button onClick={aplicarCupom} className="button-calculate">
          OK
        </button>

        {/* Input para Calcular Frete */}
        <div className="input-wrapper">
          <label htmlFor="frete" className="label">
            Calcular Frete
          </label>
          <input
            id="frete"
            type="text"
            value={frete}
            onChange={handleFreteChange}
            placeholder="Digite seu CEP"
            className="input-field"
          />
        </div>
        <button onClick={calcularFrete} className="button-calculate">
          OK
        </button>
      </div>
    </section>
  );
}

export default CalcularFretDesconto;
