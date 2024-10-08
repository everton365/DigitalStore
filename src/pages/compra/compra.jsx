import React, { useEffect, useState, useContext } from "react";
import "./compra.css";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext.js";
import Loading from "../../components/Loading/Loading.jsx";
import Header from "../../components/header/header.jsx";
import Resumo from "../../components/resumo/resumo.jsx";

function CompraPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { products, cartCount, setCartCount } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [unitario, setUnitario1] = useState("");
  const [unitario1, setUnitario] = useState("");
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
      setValorTotal(
        parseFloat((parseFloat(valorTotal) + parseFloat(unitario)).toFixed(2))
      ); // Conversão correta para números e arredondamento
      setValorTotal1(
        parseFloat((parseFloat(valorTotal1) + parseFloat(unitario1)).toFixed(2))
      );
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

  useEffect(() => {
    if (!productId) {
      console.error("Product ID not provided.");
      setLoading(false);
      return;
    }

    // Procura o produto no contexto
    const foundProduct = products.find((p) => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setUnitario((foundProduct.price * 0.95).toFixed(2));
      setUnitario1((foundProduct.price * 0.95).toFixed(2));
      setValorTotal(foundProduct.price);
      setValorTotal1((foundProduct.price * 0.95).toFixed(2));
      setLoading(false);
    } else {
      // Se o produto não for encontrado no contexto, você pode querer lidar com isso
      console.error("Product not found in context.");
      setLoading(false);
    }
  }, [productId, products]);

  if (loading) return <Loading />;

  if (!product) return <div>Produto não encontrado.</div>;

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
                <img
                  src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                  alt="product"
                  id="card__image"
                />
                <div className="image">
                  <h2>{product.title}</h2>

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
                  <span id="unitario">R${product.price}</span>
                  {unitario}
                </p>
                <p>
                  <span id="unitario">R$ {valorTotal}</span>
                  R${valorTotal1}
                </p>
              </div>
            </div>
            <Resumo valor1={valorTotal1} />
          </div>
        </div>
      </section>
    </>
  );
}

export default CompraPage;
