
import express from "express";

import { getMatches } from "../controller/match.controller.js";

const router = express.Router();

router.get("/matches", getMatches);

export default router;
