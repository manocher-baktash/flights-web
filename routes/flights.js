import { Router } from "express";
const router = Router();
import * as flightsCtrl from "../controller/flights.js";

/* GET users listing. */
// GET - localhost:3000/flights
router.get("/", flightsCtrl.index);
// GET /flights/new
router.get("/new", flightsCtrl.new);
// POST /flights
router.post("/", flightsCtrl.create);
export { router };
