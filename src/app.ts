import * as dotenv from "dotenv"
import "dotenv-defaults/config"
import express from "express"
import { routes } from "./routes"

dotenv.config()
const app = express()

app.use(routes)

export { app }
