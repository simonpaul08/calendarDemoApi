import { Router } from "express";
import { createEvent, getEvents } from "../controllers/eventController.js";



const router = Router();

router.route('/')
    .post(createEvent)

router.route('/fetch')
    .post(getEvents)


export default router;