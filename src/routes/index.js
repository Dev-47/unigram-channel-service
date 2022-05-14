import { Router } from "express";

import { index } from "../controllers/index.js";

const router = Router();

router.route("/url").get(index);

export default router;
