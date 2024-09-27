import React, { useContext } from "react";
import AppContext from "../../context/AppContext.js";
import "./styles.css";
import Productos from "../../componente/produtosLoja/produtosLoja.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
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
import image19 from "../../../public/image/produtos/Frame 9.png";
import image20 from "../../../public/image/produtos/Layer 1aa 2.png";
import image21 from "../../../public/image/produtos/Frame 9.png";
import image22 from "../../../public/image/produtos/Layer 1aa 2.png";
import image23 from "../../../public/image/produtos/Frame 9.png";
import image24 from "../../../public/image/produtos/Layer 1aa 2.png";
import image25 from "../../../public/image/produtos/Frame 9.png";
import image26 from "../../../public/image/produtos/Layer 1aa 2.png";
import image27 from "../../../public/image/produtos/Frame 9.png";
import image28 from "../../../public/image/produtos/Layer 1aa 2.png";
import image29 from "../../../public/image/produtos/Frame 9.png";
import image30 from "../../../public/image/produtos/Layer 1aa 2.png";
import image31 from "../../../public/image/produtos/Frame 9.png";
import image32 from "../../../public/image/produtos/Layer 1aa 2.png";
import image33 from "../../../public/image/produtos/Frame 9.png";
import image34 from "../../../public/image/produtos/Layer 1aa 2.png";
import image35 from "../../../public/image/produtos/Laye 1.png";

function Home() {
  const { addToCart } = useContext(AppContext);

  return (
    <div className="App">
      <Header />

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
          <button>Ver todos</button>
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
