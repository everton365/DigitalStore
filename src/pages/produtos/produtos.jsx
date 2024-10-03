import React, { useEffect, useContext, useState } from "react";
import Footer from "../../components/footer/footer.jsx";
import FilterButton from "./pageFilter.jsx";
import FilterMenu from "../../components/filtermenu/menufilter.jsx";
import "./styles.css";
import fetchProducts from "../../api/fetchProducts.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import AppContext from "../../context/AppContext.js";
import Header from "../../components/header/header.jsx";
import { useNavigate } from "react-router-dom";

function Produtos() {
  const {
    products,
    setProducts,
    loading,
    setLoading,
    addToCart,
    searchValue,
    copySearchValue,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const MAX_PRODUCTS = 10;
  useEffect(() => {
    fetchProducts(" tenis nike").then((response) => {
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
          <div className="page">
            <h1>
              Resultados para "{copySearchValue}" - {MAX_PRODUCTS} produtos
            </h1>
            <FilterButton />

            <section className="produtos">
              {products.slice(0, MAX_PRODUCTS).map((product) => (
                <ProductCard
                  key={product.id}
                  data={product}
                  onBuyClick={() => handleBuyClick(product.id)}
                />
              ))}
            </section>
            <FilterMenu />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default Produtos;
