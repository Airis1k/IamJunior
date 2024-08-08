import { configEnvVariables as envVariables } from "./env-variables.js";
import configMiddlewares from "./middlewares.js";
import configRoutes from "./routes.js";
import connectToDb from "../db/connection.js";

export { envVariables, configMiddlewares, configRoutes, connectToDb };
