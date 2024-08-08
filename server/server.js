import express from "express";
import {
   envVariables,
   configMiddlewares,
   configRoutes,
   connectToDb,
} from "./config/index.js";

const server = express();
configMiddlewares(server);
configRoutes(server);

connectToDb(() => {
   server.listen(envVariables.SERVER_PORT, () => {
      console.log(
         `Server running on http://localhost:${envVariables.SERVER_PORT}`
      );
   });
});
