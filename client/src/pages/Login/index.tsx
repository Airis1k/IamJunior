import React from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.css";

const Login = () => {
   const [email, setEmail] = React.useState<string>("");
   const [password, setPassword] = React.useState<string>("");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(email, password);
   };

   return (
      <div className={classes.page}>
         <div className={classes.container}>
            <div className={classes.formWrap}>
               <form
                  onSubmit={handleSubmit}
                  className={classes.loginForm}
                  noValidate
               >
                  <h2 className={classes.heading}>Login</h2>
                  <div className={classes.inputWrap}>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        className={classes.formInput}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
                  <div className={classes.inputWrap}>
                     <input
                        type="password"
                        id="password"
                        name="password"
                        className={classes.formInput}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
                  <button type="submit" className={classes.formBtn}>
                     Log In
                  </button>
               </form>
               <div className={classes.navWrapper}>
                  <Link to="/register" className={classes.navText}>
                     Don't have an account? Sign up
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
