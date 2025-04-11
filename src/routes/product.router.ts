import { Router } from "express";
import { createProductController } from "../controllers/product.controlle";
import { veriftyToken } from "../lib/jwt";
import {veriftyRole} from "../middlewares/role.middleware"

const router= Router ();

router.post("/",veriftyToken, veriftyRole(["ADMIN"])    ,createProductController);

export default router;