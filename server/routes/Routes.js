import express from "express";
import test from "../controllers/test.js";
import { signupRoute } from "../controllers/userControllers.js";
const router = express.Router();

router.get("/", test);
router.post("/signup", signupRoute);

export default router;
