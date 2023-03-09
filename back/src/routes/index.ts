import express from "express";
import chefsRoutes from "./chefsRoute/chefs.routes";
import restaurantsRoutes from "./restaurantsRoute/restaurants.routes";
import dishesRoutes from "./dishesRoute/dishes.routes";

const router = express.Router();

router.use("/api", chefsRoutes);
router.use("/api", restaurantsRoutes);
router.use("/api", dishesRoutes);

export default router;
