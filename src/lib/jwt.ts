import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/api-error";
import  {TokenExpiredError, verify} from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/env";


export const veriftyToken= (
    req:Request, 
    res: Response, 
    next: NextFunction
) => {

    const token= req.headers.authorization?.split(" ")[1]
    // 

    if(!token) {
        throw new ApiError("Token is Missing", 400);
    }

    verify(token, JWT_SECRET_KEY!, (err, payload) => {
        if(err){
            if(err instanceof TokenExpiredError){
                throw new ApiError("Token expired", 401);
            } else {
                throw new ApiError("Invalid Token", 401);
            }
        }

        res.locals.user= payload;

        next();
    })
}