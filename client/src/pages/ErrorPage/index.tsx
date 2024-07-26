import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div>
         <h1>Error 404 Page was not found.</h1>
         <Link to="/">Go back</Link>
      </div>
   );
};

export default ErrorPage;
