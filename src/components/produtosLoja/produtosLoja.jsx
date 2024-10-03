import React, { useEffect, useContext } from "react";
import "./produtosLoja.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Loading from "../../components/Loading/Loading";
import AppContext from "../../context/AppContext.js";

import { useNavigate } from "react-router-dom";

function Productos({ MAX_PRODUCTS, produto }) {
  const { products, setProducts, loading, setLoading, addToCart } =
    useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts("tenis nike").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  const handleBuyClick = (productId) => {
    navigate(`/compra/${productId}`);
    addToCart();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className="products container">
            {products.slice(0, MAX_PRODUCTS).map((product) => (
              <ProductCard
                key={product.id}
                data={product}
                onBuyClick={() => handleBuyClick(product.id)}
              />
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default Productos;
