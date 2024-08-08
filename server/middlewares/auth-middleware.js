import jwt from "jsonwebtoken";
import { envVariables } from "../config/index.js";

const authMiddleware = (req, res, next) => {
   const authHeader = req.body.authorization;

   if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Not authenticated" });
   }

   const token = authHeader.split(" ")[1];
   try {
      const payload = jwt.verify(token, envVariables.TOKEN_SECRET);
      req.currentUser = payload;
      next();
   } catch (err) {
      res.status(401).json({ message: "Not authenticated" });
   }
};

export default authMiddleware;
