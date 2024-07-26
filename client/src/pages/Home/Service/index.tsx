import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Service = ({ data }) => {
   console.log(data);

   return (
      <Link to="#" className={classes.link}>
         <div className={classes.service}>
            <img src={data.icon} className={classes.icon} />
            <p className={classes.text}>{data.name}</p>
         </div>
      </Link>
   );
};

export default Service;
