import { NextFunction,Request, Response } from "express"
import { registerService } from "../services/auth/register.services";
import { loginService } from "../services/auth/login.services";

export const registerController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const result = await registerService(req.body);
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};
export const LoginController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const result = await loginService(req.body);
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};
