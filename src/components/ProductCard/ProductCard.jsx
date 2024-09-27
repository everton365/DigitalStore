import React, { useContext } from "react";
import propTypes from "prop-types";

import "./ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";

function ProductCard({ data, onBuyClick }) {
  const { title, thumbnail, price } = data;

  const { cartItems, setCartItems, addToCart } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, "BRL")}</h2>
        <h2 className="card__title">{title}</h2>
        <button onClick={() => onBuyClick(data.id)}>Comprar</button>
        <button id="bt" onClick={addToCart}>
          Adicionar a Carrinho
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
