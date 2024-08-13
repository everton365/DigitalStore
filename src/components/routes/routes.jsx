import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../home/home.jsx";
import Produtos from "../produtos/produtos.jsx";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/DigitalStore" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
