import { Router } from "express";
import {  } from "../controllers/sample.controller";
import { registerController } from "../controllers/auth.controller";

const router= Router ();

router.post("/register", registerController);

export default router;