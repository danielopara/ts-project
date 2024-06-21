import UserService from "../service/UserService";
import { Request, Response } from "express";


class UserController{

    async getAllUsers(req: Request, res: Response){
        try{
            const users = await UserService.getAllUsers();
            return res.status(200).json({
                status: 200,
                message: "all users found",
                data: users
            })
        } catch (err){
            res.status(500).json({
                status: 500,
                error: err,
            })
        }
    }

    async createUser(req: Request, res: Response){
        try{
            const user = await UserService.createUser(req.body)
            return res.status(200).json({
                status: 200,
                message: "user created successfully",
                data: user
            })
        } catch (err){
            res.status(500).json({
                status: 500,
                error: err,
            })
        }
    }
}

export default new UserController()