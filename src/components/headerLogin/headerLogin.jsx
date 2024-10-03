import { useState, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import image from "../../../public/image/Group.png";
import image1 from "../../../public/image/DigitalStore.png";

import image3 from "../../../public/image/Group 53581.png";
import { Link, useLocation } from "react-router-dom";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";
import "./Header.css";

function HeaderLogin() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenDiv, setOpenDiv] = useState(false);

  const {
    setProducts,
    setLoading,
    cartCount,
    setSearchValue,
    searchValue,
    setCopySearchValue,
  } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true);

    const products = await fetchProducts(searchValue);

    setProducts(products);
    setLoading(false);
    setCopySearchValue(searchValue);
    setSearchValue("");
  };

  const toggleSearch = () => {
    setIsOpenSearch(!isOpenSearch);
    setOpenDiv(!isOpenDiv);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="sidebar-menu">
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-button" onClick={toggleMenu}>
            ×
          </button>

          <ul>
            <h3>Páginas</h3>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Produtos</a>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Meus Pedidos</a>
            </li>
          </ul>
          <div className="entrar">
            <button type="submit">Entrar</button>
            <a href="#">Cadastre-se</a>
          </div>
        </div>
      </div>
      <header>
        <section className={`container flex ${isOpenDiv ? "openDiv" : ""}`}>
          <div id="logo">
            <img src={image} alt="logo1" />
            <img src={image1} alt="logo" />
          </div>
        </section>
      </header>
    </div>
  );
}

export default HeaderLogin;
