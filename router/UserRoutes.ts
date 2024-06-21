import { Router } from "express";
import UserController from "../controller/UserController";

const router = Router();

router.route("/show").get(UserController.getAllUsers)
router.route("/add").post(UserController.createUser)


export default router;