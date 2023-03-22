import { NavLink, Link } from "react-router-dom";
import "../styles/nav.css";

import logo from "../assets/logo-3.png";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";

function Nav(){
  return(
    <>
    <nav className="navX">
          <Link to="/">
            <img className="logo_img" src={logo} alt="logo" />
          </Link>
          <NavLink to="/">
            <p>Accueil</p>  
          </NavLink>
          <NavLink to="/user/:id">
            <p>Profil</p>
          </NavLink>
          <NavLink to="/404">
            <p>Réglages</p>  
          </NavLink>
          <NavLink to="/404">
            <p>Communauté</p>
          </NavLink>
    </nav>
    <nav className="navY">
      <section className="section-nav">
      <Link to="/">
        <img className="nav-icon" src={icon1} alt="icon" />
      </Link>
      <Link to="/">
        <img className="nav-icon" src={icon2} alt="icon" />
      </Link>
      <Link to="/">
        <img className="nav-icon" src={icon3} alt="icon" />
      </Link>
      <Link to="/">
        <img className="nav-icon" src={icon4} alt="icon" />
      </Link>
      </section>
      <p>Copyright, SportSee 2020</p>
    </nav>
    </>
  )
}
export default Nav;