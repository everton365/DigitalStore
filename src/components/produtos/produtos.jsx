import Header from "../header/header";
import Footer from "../footer/footer.jsx";
import FilterButton from "./pageFilter";
import FilterMenu from "../filtermenu/menufilter.jsx";
import "./styles.css";
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

function Produtos() {
  return (
    <>
      <Header />
      <div className="App">
        <section class="container8 flex8">
          <div>
            <h2>
              Resultados para "tenis" <span>- 389 produtos</span>
            </h2>
          </div>
        </section>
        <>
          <FilterButton />
        </>

        <section className="App-produto">
          <div className="container9 flex9">
            <>
              <FilterMenu />
            </>
            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image19} alt="sale-off" />
                <img id="grid-tenis" src={image20} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>

            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image21} alt="sale-off" />
                <img id="grid-tenis" src={image22} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>

            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image23} alt="sale-off" />
                <img id="grid-tenis" src={image24} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>

            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image25} alt="sale-off" />
                <img id="grid-tenis" src={image26} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>

            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image27} alt="sale-off" />
                <img id="grid-tenis" src={image28} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>

            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image29} alt="sale-off" />
                <img id="grid-tenis" src={image30} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>

            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image31} alt="sale-off" />
                <img id="grid-tenis" src={image32} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>
            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image33} alt="sale-off" />
                <img id="grid-tenis" src={image34} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>
            <div className="grid-product">
              <div className="back-image">
                <img id="grid-oferta" src={image27} alt="sale-off" />
                <img id="grid-tenis" src={image28} alt="gridtenis" />
              </div>
              <p>
                <span className="mini-text">Tênis</span>
              </p>
              <p>K-Swiss v8 - Masculino</p>
              <p>
                {" "}
                <span className="preco">$200</span> $100
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Produtos;
