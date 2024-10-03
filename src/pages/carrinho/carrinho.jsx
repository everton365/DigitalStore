import react, { useState } from "react";
import "./carrinho.css";
import Header from "../../components/header/header";
import image20 from "../image/imagetenis.png";

function Carrinho() {
  const [cartCount, setCartCount] = useState(1);
  const [unitario, setUnitario] = useState(249.9);
  const [unitario1, setUnitario1] = useState(349.9);
  const [valorTotal, setValorTotal] = useState(unitario);
  const [valorTotal1, setValorTotal1] = useState(unitario1);

  const remove = () => {
    setValorTotal1(unitario1);
    setValorTotal(0);
    setCartCount(0);
  };

  const addToCart = () => {
    if (cartCount === 0) {
      setCartCount(1);
      setValorTotal(unitario);
      setValorTotal1(unitario1);
    } else {
      setCartCount(cartCount + 1);
      setValorTotal(parseFloat((valorTotal + unitario).toFixed(2)));
      setValorTotal1(parseFloat((valorTotal1 + unitario1).toFixed(2)));
    }
  };
  const addToCart1 = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
      setValorTotal((valorTotal - unitario).toFixed(2));
      setValorTotal1((valorTotal1 - unitario1).toFixed(2));
    } else if (cartCount === 0) {
      setValorTotal(0);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div>
          <div className="carrinho1">
            <vid className="title">
              <h1>MEU CARRINHO</h1>
              <h3>QUANTIDADE</h3>
              <h3>UNITARIO</h3>
              <h3>TOTAL</h3>
            </vid>
            <div className="carrinho2">
              <div className="produtoRef">
                <img id="grid-tenisCar" src={image20} alt="gridtenis" />
                <div className="image">
                  <h2>Tênis Nike Revolution 6 Next</h2>
                  <h2>Nature Masculino</h2>
                  <p>
                    <span id="refi">cor:</span> Vermelho / Branco
                  </p>
                  <p>
                    <span id="refi">Tamanho:</span> 42
                  </p>
                </div>
              </div>
              <div className="btn-ref">
                <div className="org">
                  <div className="contidade">
                    <button onClick={addToCart1}>-</button>
                    <span>{cartCount}</span>
                    <button onClick={addToCart}>+</button>
                  </div>
                  <div id="btnRemove">
                    <button onClick={remove}>remover item</button>
                  </div>
                </div>
                <p>
                  <span id="unitario">R${unitario1}</span>
                  {unitario}
                </p>
                <p>
                  <span id="unitario">R$ {valorTotal1}</span>
                  {valorTotal}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Carrinho;
