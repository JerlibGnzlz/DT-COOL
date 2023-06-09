import { Router } from "express";
import {
    getsTravel,
    getTravel,
    createTravel,
    updateTravel,
    deleteTravel
} from "../controllers/travelsController"
import { checkJwt } from "../middlewares/checkJwt"
import { uploadmiddleware } from "../utils/file"

const router = Router()


router.get("/API/travels", getsTravel)

router.get("/API/travel/:id", checkJwt, getTravel)

router.post("/API/travel", checkJwt, uploadmiddleware, createTravel)

router.put("/API/travel/:id", checkJwt, updateTravel)

router.delete("/API/travel/:id", checkJwt, deleteTravel)






export default router 