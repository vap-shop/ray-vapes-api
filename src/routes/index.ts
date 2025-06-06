import { Router } from "express";

import { CartRouter } from "./cart.route";
import { ExampleRouter } from "./example.route";
import { OrdersRouter } from "./order.route";
import { ProductsRouter } from "./products.route";

const router = Router();

router.use("/cart", CartRouter);

router.use("/example", ExampleRouter);

router.use("/orders", OrdersRouter);

router.use("/products", ProductsRouter);

export default router;
