import React, { useContext, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "./carrossel.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

function Carrossel() {
  const { products, setProducts, setLoading } = useContext(AppContext);

  const MAX_PRODUCTS = 4;

  useEffect(() => {
    fetchProducts("tenis nike").then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, [setProducts, setLoading]);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      {/* Defina uma altura para o Swiper */}
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {products.slice(0, MAX_PRODUCTS).map((product, index) => (
          <SwiperSlide key={index}>
            {product.thumbnail ? (
              <img
                src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="product"
                className="slide-item"
              />
            ) : (
              <p>Imagem indisponível</p> // Exibir mensagem caso não tenha imagem
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;
