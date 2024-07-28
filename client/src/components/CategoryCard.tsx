import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { Props } from "../pages/Home/Service";
import classes from "../assets/CategoryCard.module.css";

const CategoryCard: FC<Props> = ({ data }) => {
   const { name, icon } = data;
   const link: string = name.toLowerCase();

   return (
      <NavLink
         to={`/search/${link}`}
         className={({ isActive }) =>
            isActive ? `${classes.card} ${classes.activeCard}` : classes.card
         }
      >
         <img src={icon} alt="service icon" className={classes.icon} />
         <p className={classes.text}>{name}</p>
      </NavLink>
   );
};

export default CategoryCard;
