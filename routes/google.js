import { Router } from "express";
import { googleLogin } from "../controllers/googleControllers.js";


const router = Router();

router.route('/')
    .post(googleLogin)

export default router;