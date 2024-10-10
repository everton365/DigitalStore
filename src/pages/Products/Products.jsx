import React, { useEffect, useContext } from "react";
import Footer from "../../components/footer/footer.jsx";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts.js";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import AppContext from "../../context/AppContext.js";
import Header from "../../components/header/header.jsx";
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

  const handleBuyClick = async (productId) => {
    try {
      // Faz a requisição para salvar o productId no servidor
      const response = await fetch("http://localhost:3000/salvar-compra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }), // Envia o productId no corpo da requisição
      });

      const data = await response.text();
      setMessage(data); // Exibe a mensagem de sucesso ou erro

      if (response.ok) {
        // Navega para a página de compra se a requisição foi bem-sucedida
        navigate(`/compra/${productId}`);
        addToCart();
      }
    } catch (error) {
      console.error("Erro ao salvar productId:", error);
      setMessage("Erro ao conectar com o servidor.");
    }
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
