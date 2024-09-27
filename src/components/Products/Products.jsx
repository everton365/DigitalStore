import React, { useEffect, useContext } from "react";
import Footer from "../footer/footer.jsx";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loading from "../Loading/Loading";
import AppContext from "../../context/AppContext.js";
import Header from "../header/header.jsx";
import { useNavigate } from "react-router-dom";

function Products({ MAX_PRODUCTS }) {
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
          <Header />
          <section className="products container">
            {products.slice(0, MAX_PRODUCTS).map((product) => (
              <ProductCard
                key={product.id}
                data={product}
                onBuyClick={() => handleBuyClick(product.id)}
              />
            ))}
            <Footer />
          </section>
        </>
      )}
    </>
  );
}

export default Products;
