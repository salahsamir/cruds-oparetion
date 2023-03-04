import { Router } from "express";
import { signin, singup } from "./controller/auth.js";
export const router_auth=Router()
router_auth.post('/signup',singup)
router_auth.post('/signin',signin)
