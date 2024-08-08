import authRouter from "../features/auth/router.js";
import usersRouter from "../features/users/router.js";
import categoriesRouter from "../features/categories/router.js";
import businessRouter from "../features/businesses/router.js";

const configRoutes = (server) => {
   server.use(authRouter);
   server.use(usersRouter);
   server.use(categoriesRouter);
   server.use(businessRouter);
};

export default configRoutes;
