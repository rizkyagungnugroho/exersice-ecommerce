import { User } from "@prisma/client";
import prisma from "../../config/prisma";
import { ApiError } from "../../utils/api-error";
import { comparePassowrd } from "../../lib/argon";
import {sign} from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../../config/env";
import { NextFunction } from "express";
export const loginService = async (body: Pick<User, "email" | "password">) => {
    //cek dulu email yang dimasukkan ada apa tidak di database
    // kalo tidak ada throw erro 
    // kalo ada cek passwordnya sesuai atau tidak
    // kalo tidak sesuai , throw error 
    // kalo sesuai kirim data user tsb berserta toket jwt

    const { email, password } =body;

    const user = await prisma.user.findFirst({
        where: {email},
    })

    if(!user){
        throw new ApiError("invalid credentials", 400);
        
    }

    const isPasswordValid= await comparePassowrd(password, user.password);

    if(!isPasswordValid){
        throw new ApiError("invalid credentials",400);
    }


    const tokenPayload= {id: user.id, role:user.role}

    const token = sign(tokenPayload, JWT_SECRET_KEY!,{
        expiresIn: "2h",
    })
    
    const{password: pw, ...userWithoutPasword} = user;

    return {...userWithoutPasword, token};

};

