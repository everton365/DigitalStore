import { useState } from "react";
import "../../App.css";
import image from "../../../public/image/Group.png";
import image1 from "../../../public/image/DigitalStore.png";
import image2 from "../../../public/image/Search1.png";
import image3 from "../../../public/image/Group 53581.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenDiv, setOpenDiv] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const addToCart = () => {
    setCartCount(cartCount + 1);
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
            <img
              className="busca"
              src={image2}
              alt="search1"
              onClick={toggleSearch}
            />
          </div>

          <input
            className={`search ${isOpenSearch ? "openSearch" : ""}`}
            type="text"
            name="nome"
            placeholder="  Pesquisar produtos..."
          />
          <a href="#">Cadastre-se</a>
          <button type="submit">Entrar</button>
          <div className="carrinho">
            <img id="carrinho" src={image3} alt="logo-carrinho" />
            <span>{cartCount}</span>
          </div>
        </section>
      </header>
      <main>
        <section className="container2 flex2">
          <button className="bt" onClick={addToCart}>
            Adicionar ao Carrinho,
          </button>
          <Link
            to="/DigitalStore"
            className={
              currentPath === "/DigitalStore" ||
              currentPath === "/DigitalStore/"
                ? "active"
                : "btn"
            }
          >
            Home
          </Link>
          <Link
            to="/Produtos"
            className={
              currentPath === "/Produtos" || currentPath === "/CardProdutos"
                ? "active"
                : "btn"
            }
          >
            Produtos
          </Link>
          <Link className="btn" to="#">
            Categorias
          </Link>
          <Link
            to="/Carrinho"
            className={currentPath === "/Carrinho" ? "active" : "btn"}
          >
            Meus Pedidos
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Header;
