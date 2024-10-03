import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Produtos from "../pages/produtos/produtos.jsx";
import Carrinho from "../pages/carrinho/carrinho.jsx";
import CardProdutos from "../pages/cardProdutos/cardProdutos.jsx";
import Products from "../pages/Products/Products.jsx";
import CompraPage from "../pages/compra/compra.jsx";
import Login from "../pages/login/pageLogin.jsx";
import Home from "../pages/home/home.jsx";
import Cadastro from "../pages/cadastro/cadastro.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DigitalStore" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/CardProdutos" element={<CardProdutos />} />
        <Route path="/categorias" element={<Products />} />
        <Route path="/compra/:productId" element={<CompraPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
