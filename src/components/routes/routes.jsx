import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";
import Produtos from "../produtos/produtos.jsx";
import Carrinho from "../carrinho/carrinho.jsx";
import CardProdutos from "../cardProdutos/cardProdutos.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DigitalStore" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Carrinho" element={<Carrinho />} />
        <Route path="/CardProdutos" element={<CardProdutos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
