import image36 from "../../../public/image/logo.png";
import image37 from "../../../public/image/Group 53511.png";
import "./footer.css";

function Footer() {
  return (
    <div className="App">
      <footer>
        <section className="container11 flex11">
          <div className="footer-logo">
            <img src={image36} alt="logo1" />
            <p id="text-logo">
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit, sed do eiusmod tempor <br />
              incididunt ut labore et dolore.
            </p>
            <img id="footer-image" src={image37} alt="rede-social" />
          </div>

          <div className="footer-list">
            <ul>
              <h6>Informação</h6>
              <li>Sobre Drip Store</li>
              <li>Segurança</li>
              <li>Wishlist</li>
              <li>Blog</li>
              <li>Trabalhe conosco</li>
              <li>Meus Pedidos</li>
            </ul>
          </div>

          <div className="footer-list1">
            <ul>
              <h6>Categoria</h6>
              <li>Camisetas</li>
              <li>Calças</li>
              <li>Bonés</li>
              <li>Headphones</li>
              <li>Tênis</li>
            </ul>
          </div>

          <div className="footer-list2">
            <h6>Contato</h6>
            <p id="text-logo1">
              Av. Santos Dumont, 1510 - 1 <br />
              andar - Aldeota, Fortaleza - <br />
              CE, 60150-161
            </p>
            <p id="text-logo">(85) 3051-3411</p>
          </div>
        </section>
        <section className="roda-pe">
          <div className="footer-text">&copy; 2024 Digital college</div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
