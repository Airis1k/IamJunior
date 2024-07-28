import React from "react";
import { SERVICES } from "../constants";
import CategoryCard from "./CategoryCard";
import classes from "../assets/Sidebar.module.css";

const Sidebar = () => {
   return (
      <div className={classes.sidebar}>
         <h2 className={classes.title}>Categories</h2>
         {SERVICES.map((element) => {
            return <CategoryCard key={element.id} data={element} />;
         })}
      </div>
   );
};

export default Sidebar;
