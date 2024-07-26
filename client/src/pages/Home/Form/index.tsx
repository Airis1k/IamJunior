import React from "react";
import classes from "./index.module.css";
import searchIcon from "../../../assets/searchIcon.svg";

const Form = () => {
   return (
      <form className={classes.searchForm}>
         <input
            type="search"
            id="service-search"
            name="q"
            placeholder="Search"
            className={classes.searchBar}
         />
         <button className={classes.searchBtn}>
            <img src={searchIcon} alt="search" />
         </button>
      </form>
   );
};

export default Form;
