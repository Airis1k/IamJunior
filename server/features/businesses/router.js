import express from "express";
import getBusinessById from "./queries/get-business-by-id.js";
import getBusinesses from "./queries/get-businesses.js";
import getBusinessesByCategory from "./queries/get-businesses-by-category.js";
import createBusiness from "./mutations/create-business.js";
import updateBusiness from "./mutations/update-business.js";

const ROUTER_BASE = "/businesses";
const businessRouter = express.Router();

businessRouter.get(`${ROUTER_BASE}/:id`, getBusinessById);
businessRouter.get(ROUTER_BASE, getBusinesses);
businessRouter.get(
   `${ROUTER_BASE}/category/:category`,
   getBusinessesByCategory,
);
businessRouter.post(ROUTER_BASE, createBusiness);
businessRouter.patch(`${ROUTER_BASE}/:id`, updateBusiness);

export default businessRouter;
