import dotenv from 'dotenv'
dotenv.config()
import express   from "express";
import { initapp } from "./Src/initApp.js";
const app = express()
const port = process.env.port
initapp(app,express)
console.log({con:process.env.LOCALDBURI});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))