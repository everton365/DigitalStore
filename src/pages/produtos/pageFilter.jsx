import React, { useState } from "react";
import "./styles.css";
import { Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FilterButton() {
  const [anchorEl, setAnchorEl] = useState("");
  const [filter, setFilter] = useState(": Mais relevante");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(!anchorEl);
  };

  const handleClose1 = (value) => {
    setFilter(value);
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          border: "1px solid #000000",
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          marginTop: "-60px",
          width: "300px",
          backgroundColor: "#ffff", // Cor de fundo
          color: "#000000", // Cor do texto
          marginLeft: "750px",
          "&:hover": {
            backgroundColor: "#c92071", // Cor de fundo ao passar o mouse
          },
          padding: "10px 20px", // Padding
          borderRadius: "5px", // Bordas arredondadas
          fontSize: "16px", // Tamanho da fonte
          fontWeight: "bold",
          textTransform: "capitalize",
          "& .span-style": {
            // Aplica estilos ao <span> dentro do botão
            fontWeight: "normal",
            textTransform: "capitalize",
          },
        }}
      >
        Ordenar por <span className="span-style">{filter}</span>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            color: "#000000",
            width: "300px",
            "& .item": {
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "33px",
              fontWeight: "normal",
              textTransform: "capitalize",
              color: "#000000",
              "&:hover": {
                backgroundColor: "#c92071", // Cor de fundo ao passar o mouse
              },
            },
          },
        }}
      >
        <MenuItem
          className="item"
          onClick={() => handleClose1(": Mais relevante")}
        >
          Mais relevante
        </MenuItem>
        <MenuItem
          className="item"
          onClick={() => handleClose1(": Mais recentes")}
        >
          Mais recentes
        </MenuItem>
        <MenuItem
          className="item"
          onClick={() => handleClose1(": Mais populares")}
        >
          Mais populares
        </MenuItem>
      </Menu>
    </div>
  );
}

export default FilterButton;
