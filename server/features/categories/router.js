import express from "express";
import getCategories from "./queries/get-categories.js";
import createCategory from "./mutations/create-category.js";

const ROUTER_BASE = "/categories";
const categoriesRouter = express.Router();

categoriesRouter.get(ROUTER_BASE, getCategories);
categoriesRouter.post(ROUTER_BASE, createCategory);

export default categoriesRouter;
