import jwt from "jsonwebtoken";
import { envVariables } from "../../../config/index.js";

const generateToken = (payload) => {
   const token = jwt.sign(payload, envVariables.TOKEN_SECRET, {
      expiresIn: envVariables.TOKEN_EXPIRATION,
   });

   return token;
};

export default generateToken;
