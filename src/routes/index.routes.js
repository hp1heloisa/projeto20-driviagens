import { Router } from "express";
import travelsRouter from "./travels.routes.js";
import usersRouter from "./users.routes.js";

const router = Router();

router.use(usersRouter);
router.use(travelsRouter);

export default router;