import express from "express";
import chefsRoutes from "./chefsRoute/chefs.routes";
import restaurantsRoutes from "./restaurantsRoute/restaurants.routes";
import dishesRoutes from "./dishesRoute/dishes.routes";
import signUpRoutes from "./signUpRoute/signUp.route";


const router = express.Router();

router.use("/api", chefsRoutes);
router.use("/api", restaurantsRoutes);
router.use("/api", dishesRoutes);
router.use("/api/signUp", signUpRoutes);
// router.use("/api", signInRoutes);

export default router;
