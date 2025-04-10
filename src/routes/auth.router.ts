import { Router } from "express";
import {  } from "../controllers/sample.controller";
import { LoginController, registerController } from "../controllers/auth.controller";

const router= Router ();

router.post("/register", registerController);
router.post("/login", LoginController);

export default router;