import "./NavBar.css";
import { CardWidget } from "../CardWidget/CardWidget";

export const NavBar = () => {
  return (
    <div className="contenedorNavBar">
      <img src="/imagenes/logo-bm.jpg" alt="" />

      <div className="navBar_Items">
        <a href="Productos">Productos</a>
        <a href="Nuestra historia">Nuestra Historia</a>
        <a href="Contacto">Contacto</a>
        <a href="Cardwidget">{<CardWidget />}</a>
      </div>
    </div>
  );
};
