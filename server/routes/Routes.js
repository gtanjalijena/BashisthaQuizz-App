import express from "express";
import test from "../controllers/test.js";
import { signupRoute,loginRoute } from "../controllers/userControllers.js";
import isAuthenticated from "../middlewares/jwt.js";

const router = express.Router();

router.get("/",  async (req, res) => {
    res.send("test page2");
  });
router.get("/xyz",  async (req, res) => {
    res.send("test page3");
  });
router.post("/signup", signupRoute);
router.post("/login", loginRoute);

// checking if user logedin
router.post("/isAuthenticated", isAuthenticated);



export default router;
