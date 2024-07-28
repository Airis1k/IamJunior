import React from "react";
import { useParams } from "react-router-dom";
import { BUSINESSES } from "../../constants";
import Card from "./Card";
import Sidebar from "../../components/Sidebar";
import classes from "./index.module.css";

const Categories = () => {
   const { category } = useParams();

   const filteredServices = BUSINESSES.filter((business) => {
      return business.service.toLowerCase() === category;
   });

   return (
      <main>
         <div className={classes.container}>
            <Sidebar />
            <div className={classes.contentWrap}>
               <h2 className={classes.title}>{category}</h2>
               <div className={classes.cardsWrap}>
                  {filteredServices.map((element) => {
                     return <Card key={element.id} data={element} />;
                  })}
               </div>
            </div>
         </div>
      </main>
   );
};

export default Categories;
