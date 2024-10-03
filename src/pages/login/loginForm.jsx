import React, { useState, useEffect } from "react";
import "./login.css"; // Arquivo CSS para o estilo

const PhotoSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 5000 milissegundos = 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="slides">
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? "active" : ""}`}
            key={index}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
