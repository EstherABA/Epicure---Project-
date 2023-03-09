import express from "express";
import chefsRoutes from "./chefsRoute/chefs.routes";
// import restaurantsRoutes from "./restaurantsRoute/restaurants.routes";

const router = express.Router();

router.use("/api", chefsRoutes);
// router.use("/restaurants", restaurantsRoutes);
// router.use("/dishes", dishesRoutes);

export default router;
