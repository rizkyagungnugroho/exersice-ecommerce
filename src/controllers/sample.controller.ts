import { NextFunction,Request, Response } from "express"
import { getSamplesService } from "../services/sample/get-sample.services"


export const getSampleController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const result = await getSamplesService();
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};
