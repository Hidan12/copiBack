import { Router } from "express"
import { readPage } from "../controllers/readPage/readPage.js"

const router = Router()

router.get("/read", readPage)

export default router