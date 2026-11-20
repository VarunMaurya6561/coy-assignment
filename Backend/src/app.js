import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

import profileRoutes from '../src/route/profile.routes.js'
app.use("/api/profiles", profileRoutes);

import matchRoutes from '../src/route/match.routes.js'
app.use("/api", matchRoutes)

export default app