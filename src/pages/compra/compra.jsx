import React, { useEffect, useState, useContext } from "react";
import "./compra.css";
import { useParams } from "react-router-dom";
import AppContext from "../../context/AppContext.js";
import Loading from "../../components/Loading/Loading.jsx";
import Header from "../../components/header/header.jsx";
import Resumo from "../../components/resumo/resumo.jsx";
import Productos from "../../components/produtosLoja/produtosLoja.jsx";
import Footer from "../../components/footer/footer.jsx";
import CalcularFretDesconto from "../../components/calcularFretDesconto/calcularFretDesconto.jsx";

function CompraPage() {
  const { productId } = useParams();
  const [quantityId, setQuantityId] = useState(1);
  const [isDataSent, setIsDataSent] = useState(false);
  const [product, setProduct] = useState(null);
  const { products, cartCount, setCartCount } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [unitario, setUnitario1] = useState("");
  const [unitario1, setUnitario] = useState("");
  const [valorTotal, setValorTotal] = useState(unitario);
  const [valorTotal1, setValorTotal1] = useState(unitario1);

  const formatoValorTotal1 = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valorTotal1);

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
      setIsDataSent(false);
    } else {
      setCartCount(cartCount + 1);
      setIsDataSent(false);
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
      setIsDataSent(false);
    } else if (cartCount === 0) {
      setValorTotal(0);
      setIsDataSent(false);
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
      setLoading(false); // Define o carregamento como falso após encontrar o produto
    } else {
      console.error("Product not found in context.");
      setLoading(false);
    }
  }, [productId, products]);

  // useEffect para enviar os dados ao backend
  useEffect(() => {
    const sendCartData = async () => {
      try {
        await fetch("http://localhost:3000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: "123",
            productId: productId, // Id do produto
            quantityId: quantityId, // Quantidade
            price: product.price, // Preço do produto
          }),
        });
        // Marca que os dados foram enviados
        setIsDataSent(true);
      } catch (error) {
        console.error("Erro ao enviar dados:", error);
      }
    };

    // Envia os dados somente se a quantidade for maior que 0, o produto estiver definido e ainda não tiver sido enviado
    if (cartCount > 0 && product && !isDataSent) {
      sendCartData();
    }
  }, [cartCount, product, isDataSent]); // O efeito será executado quando qualquer uma dessas dependências mudar

  // Após o envio, buscar os dados de todos os produtos no carrinho

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
              <h3 id="fixh3">QUANTIDADE</h3>
              <h3 id="fixh3">UNITARIO</h3>
              <h3 id="fixh3">TOTAL</h3>
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
                  R${formatoValorTotal1}
                </p>
              </div>
            </div>
            <CalcularFretDesconto />

            <Resumo valor1={valorTotal1} />
          </div>
          <div className="produtosCompra">
            <h2>Produtos Relacionados</h2>
            <Productos MAX_PRODUCTS={5} produto="tenis" />
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default CompraPage;
