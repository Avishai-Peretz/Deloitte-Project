import express from "express";
import { editTerms, getTerms } from "../controllers/terms.js";

const router = express.Router();

router.put('/', editTerms);
router.get('/' , getTerms);


export default router;