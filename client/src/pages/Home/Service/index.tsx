import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

export type Props = {
   data: {
      name: string;
      icon: string;
   };
};

const Service: FC<Props> = ({ data }) => {
   const { name, icon } = data;
   const link: string = name.toLowerCase();

   return (
      <Link to={`/search/${link}`} className={classes.link}>
         <div className={classes.service}>
            <img src={icon} className={classes.icon} />
            <p className={classes.text}>{name}</p>
         </div>
      </Link>
   );
};

export default Service;
