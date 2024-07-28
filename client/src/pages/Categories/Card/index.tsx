import React, { FC } from "react";
import classes from "./index.module.css";

type Props = {
   data: {
      service: string;
      name: string;
      person: string;
      address: string;
      image: string;
   };
};

const Card: FC<Props> = ({ data }) => {
   const { service, name, person, address, image } = data;

   return (
      <div className={classes.card}>
         <img src={image} alt="service" className={classes.photo} />
         <div className={classes.txtWrap}>
            <p className={classes.service}>{service}</p>
            <h3 className={classes.name}>{name}</h3>
            <p className={classes.person}>{person}</p>
            <p className={classes.address}>{address}</p>
            <button className={classes.bookBtn}>Book now</button>
         </div>
      </div>
   );
};

export default Card;
