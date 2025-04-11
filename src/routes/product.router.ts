import { Router } from "express";
import { 
    createProductController, updateProductController 
} from "../controllers/product.controlle";
import { veriftyToken } from "../lib/jwt";
import {veriftyRole} from "../middlewares/role.middleware"

const router= Router ();

router.post("/",veriftyToken, veriftyRole(["ADMIN"]) ,createProductController);
router.patch("/:id",veriftyToken, veriftyRole(["ADMIN"]) ,updateProductController);

export default router;