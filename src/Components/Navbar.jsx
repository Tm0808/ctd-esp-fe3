import { useContext } from "react";
import { ContextGlobal } from "../context/ContextProvider";
import { Link } from "react-router-dom";
import "./layout/Navbar.css";
import { Button } from "./common/Button";
import "../index.css";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { dark, setDark} =
    useContext(ContextGlobal);

  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };
  // useEffect(() => {
  //   showButton();
  // }, []);
  // window.addEventListener("resize", showButton);

  const cambiarTema = () => {
    if (dark) {
      setDark(false);
    } else {
      setDark(true);
    }
  };

  return (
    <>
      <nav className="navbar-container">
        <Link to="/" className="navbar-logo">
          SA-LUD
        </Link>

        <ul>
          <Link to="/">Conocé SA-LUD</Link>
          <Link to="/contact">Quiero ser Socio</Link>
          <Link to="/detailhome">Información al Socio</Link>
          <Link to="/favs">Gestiones Online</Link>
          <Link to="/favs">Cartilla Médica</Link>
          <Link to="/favs">Salud y Bienestar</Link>
          <Link to="/favs">Novedades</Link>
          <Link to="/favs">Contacto</Link>
        </ul>
        <Button
          className="btns"
          buttonStyle="btn--primario"
          buttonSize="btn--chico"
          onClick={cambiarTema}
          id="btn--chico"
        >
          Modo Oscuro
        </Button>
        {/* <i className="far fa-play-circle"></i> */}
      </nav>
    </>
  );
};

export default Navbar;









  


