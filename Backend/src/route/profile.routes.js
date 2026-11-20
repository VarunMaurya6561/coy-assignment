import express from 'express'
import {getDiscoverProfiles, swipeProfile} from '../controller/profile.controller.js'

const router = express.Router();

router.get("/feed", getDiscoverProfiles);
router.post("/swipe", swipeProfile);

export default router