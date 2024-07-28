import { NavLink, Link, useNavigate } from "react-router-dom";
import classes from "../assets/Navbar.module.scss";
import Logo from "../assets/logoipsum.svg";

const Navbar = () => {
   const navigate = useNavigate();

   const goToLoginPage = () => {
      navigate("/login");
   };

   return (
      <header className={classes.containerWrapper}>
         <nav className={classes.container}>
            <div className={classes.contentWrap}>
               <Link to="/">
                  <img src={Logo} alt="logo" className={classes.image} />
               </Link>
               <ul className={classes.linkWrapper}>
                  <li>
                     <NavLink to="/" className={classes.link}>
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/services" className={classes.link}>
                        Services
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/about-us" className={classes.link}>
                        About Us
                     </NavLink>
                  </li>
               </ul>
            </div>
            <button onClick={goToLoginPage} className={classes.signInLink}>
               Login / Sign Up
            </button>
         </nav>
      </header>
   );
};

export default Navbar;
