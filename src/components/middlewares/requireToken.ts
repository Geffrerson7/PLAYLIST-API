import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import type { NextFunction, Request, Response } from "express";

dotenv.config()

export function requireToken(req:Request, res:Response, next:NextFunction){
    try {
        
        let token = req.headers?.authorization;

        if(!token){
            next()
        }else{
        token = token.split(' ')[1]
        const uid=jwt.verify(token, process.env.JWT_SECRET!);
        (req as any).uid = uid;
        
        next()
        }
    } catch (error) {
        console.log(error);
        return res
                .status(401)
                .json({ok: false, message: error})
    }
}


