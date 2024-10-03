import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext.js";

import "./styles.css";
import Productos from "../../components/produtosLoja/produtosLoja.jsx";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";
import image4 from "../image/imagetenis.png";
import image5 from "../image/Group 53582.png";
import image6 from "../../../public/image/Ornament 11.png";
import image8 from "../../../public/image/produtos/Mask group.png";
import image9 from "../../../public/image/produtos/Frame 9.png";
import image10 from "../../../public/image/produtos/ddd 1.png";
import image11 from "../../../public/image/produtos/Frame 9.png";
import image12 from "../../../public/image/produtos/d9db11953a2d185d37246bb1f500c957 1.png";
import image13 from "../../../public/image/coleçao/Group 535869.png";
import image14 from "../../../public/image/coleçao/Group 53586.png";
import image15 from "../../../public/image/coleçao/OIG4.UhkWBB0z-removebg-preview.png";
import image16 from "../../../public/image/coleçao/Group 535867.png";
import image17 from "../../../public/image/coleçao/Group 535868.png";
import image18 from "../../../public/image/Line.png";
import image35 from "../../../public/image/produtos/Laye 1.png";
import Carrossel from "../../components/carrossel/carrossel.jsx";

function Home() {
  const { addToCart } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const handleClick = async () => {
    try {
      const response = await fetch("http://localhost:3000"); // URL da sua rota
      const data = await response.text(); // Obtém a resposta como texto
      setMessage(data); // Atualiza o estado com a resposta
    } catch (error) {
      console.error("Erro ao chamar a rota:", error);
      setMessage("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="App">
      <Header />
      {/*<button onClick={handleClick}>teste</button>
      <p>{message}</p>
      <Carrossel />*/}
      <main>
        <section className="container3 flex3">
          <div className="ofertas">
            <div className="tenis">
              <img src={image4} alt="imagetenis" />
            </div>
            <p id="p">Melhores ofertas personalizadas</p>
            <span>
              Queima de <br />
              stoque Nike🔥
            </span>
            <p id="oferta">
              Consequat culpa exercitation mollit nisi excepteur do
            </p>
            <p id="oferta">tempor laboris eiusmod irure consectetur.</p>
            <button>Ver Ofertas</button>
          </div>
          <div className="slid">
            <img src={image5} alt="slid" />
          </div>
          <div className="ornamento">
            <img src={image6} alt="ornamento" />
          </div>
        </section>

        <section className="container4">
          <h2>Coleções em destaque</h2>
        </section>

        <section className="container5 flex5">
          <div className="product">
            <img id="image" src={image9} alt="sale-off" />
            <h3>
              Coleção
              <br />
              Adidas
            </h3>
            <button>comprar</button>
            <div className="camisa">
              <img id="camisa1" src={image8} alt="tishu" />
            </div>
          </div>

          <div className="product">
            <img id="image" src={image9} alt="sale-off" />
            <h3>
              Coleção
              <br />
              Adidas
            </h3>
            <button>comprar</button>
            <div className="sapato">
              <img id="sapato1" src={image10} alt="tishu" />
            </div>
          </div>

          <div className="product">
            <img id="image" src={image11} alt="sale-off" />
            <h3>
              Novo
              <br />
              Beats bass
            </h3>
            <button>comprar</button>
            <div className="fone">
              <img id="fone1" src={image12} alt="tishu" />
            </div>
          </div>
        </section>

        <section className="container6">
          <h2>Coleções em Destaque</h2>
        </section>

        <section className="container7 flex7">
          <div className="colecao">
            <div className="radius">
              <img src={image13} alt="camisa" />
            </div>
            <p>Camisetas</p>
          </div>

          <div className="colecao">
            <div className="radius">
              <img src={image14} alt="camisa" />
            </div>
            <p>Calça</p>
          </div>

          <div className="colecao">
            <div className="radius">
              <img src={image15} alt="camisa" />
            </div>
            <p>Bonés</p>
          </div>

          <div className="colecao">
            <div className="radius">
              <img src={image16} alt="camisa" />
            </div>
            <p>Headphones</p>
          </div>

          <div className="colecao">
            <div className="radius">
              <img src={image17} alt="camisa" />
            </div>
            <p>Tênis</p>
          </div>
        </section>

        <section id="container8">
          <h2>podutos em alta</h2>
          <button>Ver todo</button>
          <img src={image18} />
        </section>

        <section className="container9 flex9">
          <Productos MAX_PRODUCTS={10} produto="tenis" />
        </section>

        <section className="container10">
          <div className="tenis1">
            <div id="elipse"></div>
            <img id="tenis01" src={image35} alt="tenis1" />
          </div>

          <div className="text-final">
            <p id="text">Ofertas especial</p>
            <p className="tema">
              Air Jordan edição de
              <br />
              colecionador
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim <br />
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut{" "}
              <br />
              aliquip
            </p>
            <button>Ver Oferta</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
