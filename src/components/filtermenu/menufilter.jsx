import React, { useContext, useState } from "react";
import "./styles.css";
import fetchProducts from "../../api/fetchProducts";
import AppContext from "../../context/AppContext.js";

const FilterMenu = () => {
  const { setProducts } = useContext(AppContext);
  const [filters, setFilters] = useState({
    adiddas: false,
    calenciaga: false,
    nike: false,
    kswiss: false,
    puma: false,
    casual: false,
    esporteLazer: false,
    corrida: false,
    tenismasculino: false,
    tenisfeminino: false,
    unissex: false,
    novo: false,
    usado: false,
  });

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const applyFilters = async () => {
    try {
      // Pegue os filtros que estão marcados
      const selectedFilters = Object.keys(filters).filter(
        (key) => filters[key]
      );

      // Verificar se nenhum filtro foi selecionado e definir um valor padrão
      const query =
        selectedFilters.length > 0 ? selectedFilters : ["tenis nike"];

      // Chame a API importada passando os filtros selecionados ou o valor padrão
      const products = await fetchProducts(query);

      console.log("Produtos retornados:", products);
      setProducts(products);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
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
              name="tenismasculino"
              checked={filters.tenismasculino}
              onChange={handleChange}
            />
            Masculino
          </label>
          <label>
            <input
              type="checkbox"
              name="tenisfeminino"
              checked={filters.tenisfeminino}
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
