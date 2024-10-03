import "./styles.css";
import { Link, useLocation } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import tenisNike from "../image/imagetenis.png";
import vector1 from "../image/Vector1.png";
import vector2 from "../image/Vector2.png";
import stars from "../image/Stars.png";
import starN from "../image/Group 1103.png";
import image18 from "../../../public/image/Line.png";
import image19 from "../image/produtos/Frame 9.png";
import image20 from "../image/produtos/Layer 1aa 2.png";

function CardProdutos() {
  return (
    <div className="AppCard">
      <Header />
      <h5>
        Home / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
      </h5>
      <section className="container15">
        <div className="tenisNike">
          <img id="tenisNike1" src={tenisNike} alt="tenisNike" />
          <img id="vector2" src={vector2} alt="vector2" />
          <img id="vector1" src={vector1} alt="vector" />
        </div>
        <div className="descriçao">
          <h1>Tênis Nike Revolution</h1>
          <h1>6 Next Nature Masculino</h1>
          <span id="ref">Casual | Nike | REF:38416711</span>
          <div className="stars">
            <img src={stars} alt="tenisNike" />
            <img src={starN} alt="tenisNike" />
          </div>
          <h2>
            <span id="valor">R$</span> <span id="numero">219,</span>
            <span id="moeda">00</span>
            <span id="preco">319,00</span>
          </h2>
          <h3>Descrição do produto</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut </p>
          <p> enim ad minim veniam, quis nostrud exercitation ullamco.</p>

          <h3>Tamanho</h3>
          <div className="flex">
            <div className="Tamanho">
              <p>39</p>
            </div>
            <div className="Tamanho">
              <p>40</p>
            </div>
            <div className="Tamanho">
              <p>41</p>
            </div>
            <div className="Tamanho">
              <p>42</p>
            </div>
            <div className="Tamanho">
              <p>43</p>
            </div>
          </div>
          <h3>Tamanho</h3>
          <div className="flex">
            <div className="radiaus-color1"></div>
            <div className="radiaus-color2"></div>
            <div className="radiaus-color3"></div>
            <div className="radiaus-color4"></div>
          </div>
          <Link to="/Carrinho">
            <button>COMPRAR</button>
          </Link>
        </div>
      </section>

      <section className="tenisNikeAir">
        <div className="tenisNi">
          {" "}
          <img src={tenisNike} alt="tenisNike" />
        </div>
        <div className="tenisNi1">
          {" "}
          <img src={tenisNike} alt="tenisNike" />
        </div>
        <div className="tenisNi2">
          {" "}
          <img src={tenisNike} alt="tenisNike" />
        </div>
        <div className="tenisNi3">
          {" "}
          <img src={tenisNike} alt="tenisNike" />
        </div>
        <div className="tenisNi4">
          {" "}
          <img src={tenisNike} alt="tenisNike" />
        </div>
      </section>
      <section id="container8">
        <h2>podutos Relacionados</h2>
        <button>Ver todos</button>
        <img src={image18} />
      </section>

      <section className="container9 flex9">
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
      </section>
      <Footer />
    </div>
  );
}

export default CardProdutos;
