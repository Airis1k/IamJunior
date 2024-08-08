import express from "express";
import login from "./queries/login.js";
import register from "./mutations/register.js";

const ROUTER_BASE = "/auth";
const authRouter = express.Router();

authRouter.post(`${ROUTER_BASE}/login`, login);
authRouter.post(`${ROUTER_BASE}/register`, register);

export default authRouter;
