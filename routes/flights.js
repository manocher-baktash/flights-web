import { Router } from "express";
const router = Router();
import * as flightsCtrl from "../controller/flights.js";

/* GET users listing. */
// GET - localhost:3000/flights
router.get("/", flightsCtrl.index);
// GET /flights/new
router.get("/new", flightsCtrl.new);
// localhost:3000/movies/:id
router.put("/:id", flightsCtrl.update)
// POST /flights
router.post("/", flightsCtrl.create);

// show /flights
router.get('/:id', flightsCtrl.show)

// localhost:3000/movies/:id
router.delete("/:id", flightsCtrl.delete)

// localhost:3000/movies/:id/edit
router.get("/:id/edit", flightsCtrl.edit)
export { router };
