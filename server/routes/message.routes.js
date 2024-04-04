import express from "express";
import {sendMessage, getMessages} from "../controller/message.controller.js"
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router();

router.get("/:id",protectRoute,getMessages);
router.post("/send/:id", protectRoute, sendMessage); //protectRoute is a middleware that protects the route before going to sendMessage

export default router;