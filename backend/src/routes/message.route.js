import express from "express";
import { getAllFriends, getMessagesByUserId, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js"

const router = express.Router();

router.use(arcjetProtection ,protectRoute)

router.get("/friends",getAllFriends);
//router.get("/servers",getAllServers);
router.get("/:id",getMessagesByUserId);

router.post("/send/:id",sendMessage);

export default router;