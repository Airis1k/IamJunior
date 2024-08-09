import express from "express";
import getUsers from "./queries/get-users.js";
import authMiddleware from "../../middlewares/auth-middleware.js";

const ROUTER_BASE = "/users";
const usersRouter = express.Router();

usersRouter.get(ROUTER_BASE, authMiddleware, getUsers);

export default usersRouter;
