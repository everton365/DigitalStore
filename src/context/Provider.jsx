import React, { useState } from "react";
import PropTypes from "prop-types";
import AppContext from "./AppContext";

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [copySearchValue, setCopySearchValue] = useState("");

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    cartCount,
    setCartCount,
    addToCart,
    searchValue,
    setSearchValue,
    copySearchValue,
    setCopySearchValue,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
