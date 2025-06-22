import { Router } from "express";
import readPage from "./page.js";

const router = Router();

router.use("/page", readPage)

export default router