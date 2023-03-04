import { Router } from "express";
import { deleteuser, getalluser, getuserbyid,  search_age, search_contains, search_end, search_name, search_name_age, updateuser, updateusers, userupdate } from "./controller/user.js";
export const user_router=Router();
user_router.get('/',getalluser)
user_router.get('/getuser/:_id',getuserbyid)
user_router.get('/search',search_name_age)
user_router.get('/search_end',search_end)
user_router.get('/search_contains',search_contains)
user_router.get('/search_name',search_name)
user_router.get('/search_age',search_age)
user_router.patch('/:_id',updateuser)
user_router.put('/:_id',updateusers)
user_router.put('/',userupdate)
user_router.delete('/:_id',deleteuser)









