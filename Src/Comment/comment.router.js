import { Router } from "express";
import { addcomment, deletecomment, getallcomment, getcommentById, updatecomment } from "./controller/comment.js";
export const router_comment=Router();
router_comment.get('/',getallcomment)
router_comment.post('/',addcomment)
router_comment.post('/:_id',getcommentById)
router_comment.delete('/',deletecomment)
router_comment.patch('/:_id',updatecomment)



