import React from "react";
import classes from "./index.module.css";
import Form from "../Form/index";
import Service from "../Service";
import { SERVICES } from "../../../constants";

const HeroSection = () => {
   return (
      <div>
         <div className={classes.container}>
            <h1 className={classes.header}>
               Find Home{" "}
               <span className={classes.purpleText}>Service/Repair</span> Near
               You
            </h1>
            <p className={classes.paragraph}>
               Explore Best Home Service & Repair near you
            </p>
            <Form />
            <div className={classes.serviceWrap}>
               {SERVICES.map((element) => {
                  return <Service key={element.id} data={element} />;
               })}
            </div>
         </div>
      </div>
   );
};

export default HeroSection;
