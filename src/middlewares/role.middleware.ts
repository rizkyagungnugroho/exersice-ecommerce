import { NextFunction, Request, Response} from "express"
import { ApiError } from "../utils/api-error";

export const veriftyRole = (roles:string[]) => {
    return (req: Request, res:Response, next:NextFunction) => {
        const userRole= res.locals.user.role;

        if(!userRole || !roles.includes(userRole)){
            throw new ApiError("Forbiden",403);
        }

        next(); 
    }
}