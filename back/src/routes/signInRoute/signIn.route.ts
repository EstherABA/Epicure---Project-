import express from "express";
import {signInController} from '../../controllers/signIn.controllers';

const router = express.Router();

router.post("/login",signInController )

const bodyParser = require("body-parser"); 
router.use(bodyParser.json());


export default router;