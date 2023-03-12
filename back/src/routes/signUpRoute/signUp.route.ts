import express from "express";
import {addUsers} from '../../controllers/signUp.controllers'

const router = express.Router();

router.get("/users", )
router.post("/users", addUsers )

const bodyParser = require("body-parser"); 
router.use(bodyParser.json());


export default router;