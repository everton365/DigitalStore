import React, { useState } from "react";
import "./styles.css";

const FilterMenu = () => {
  const [filters, setFilters] = useState({
    adiddas: false,
    calenciaga: false,
    nike: false,
    kswiss: false,
    puma: false,
    casual: false,
    esporteLazer: false,
    corrida: false,
    masculino: false,
    feminino: false,
    unissex: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const applyFilters = () => {
    console.log("Filtros aplicados:", filters);
  };

  return (
    <div className="filter-menu">
      <h2>Filtrar por</h2>
      <div className="marca">
        <h3>Marca</h3>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="adiddas"
              checked={filters.adiddas}
              onChange={handleChange}
            />
            Adiddas
          </label>
          <label>
            <input
              type="checkbox"
              name="calenciaga"
              checked={filters.calenciaga}
              onChange={handleChange}
            />
            Calenciaga
          </label>
          <label>
            <input
              type="checkbox"
              name="nike"
              checked={filters.nike}
              onChange={handleChange}
            />
            Nike
          </label>
          <label>
            <input
              type="checkbox"
              name="kswiss"
              checked={filters.kswiss}
              onChange={handleChange}
            />
            K-Swiss
          </label>
          <label>
            <input
              type="checkbox"
              name="puma"
              checked={filters.puma}
              onChange={handleChange}
            />
            Puma
          </label>

          <h3>Categoria</h3>
          <label>
            <input
              type="checkbox"
              name="casual"
              checked={filters.casual}
              onChange={handleChange}
            />
            Casual
          </label>
          <label>
            <input
              type="checkbox"
              name="esporteLazer"
              checked={filters.esporteLazer}
              onChange={handleChange}
            />
            Esporte e lazer
          </label>
          <label>
            <input
              type="checkbox"
              name="corrida"
              checked={filters.corrida}
              onChange={handleChange}
            />
            Corrida
          </label>

          <h3>Gênero</h3>
          <label>
            <input
              type="checkbox"
              name="masculino"
              checked={filters.masculino}
              onChange={handleChange}
            />
            Masculino
          </label>
          <label>
            <input
              type="checkbox"
              name="feminino"
              checked={filters.feminino}
              onChange={handleChange}
            />
            Feminino
          </label>
          <label>
            <input
              type="checkbox"
              name="unissex"
              checked={filters.unissex}
              onChange={handleChange}
            />
            Unissex
          </label>

          <h3>Estado</h3>
          <label>
            <input
              type="checkbox"
              name="novo"
              checked={filters.novo}
              onChange={handleChange}
            />
            Novo
          </label>
          <label>
            <input
              type="checkbox"
              name="novo"
              checked={filters.usado}
              onChange={handleChange}
            />
            Usado
          </label>
          <button onClick={applyFilters}>Aplicar filtro</button>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
