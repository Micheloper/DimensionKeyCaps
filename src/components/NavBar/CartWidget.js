import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Icon5 } from "./Icons";
import "./NavBar.scss";

export const CartWidget = () => {
  const { calcularCantidad } = useContext(CartContext);

  return (
    <div
      className="nav-item nav-link"
      style={{
        visibility: calcularCantidad() === 0 ? "hidden" : "visible",
      }}
    >
      <Icon5 />
      <span class="link-text">Carrito</span>
      <span className="CartCal">{calcularCantidad()}</span>
    </div>
  );
};
