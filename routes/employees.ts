import express from "express";
import { getEmployees,SearchEmployees, createEmployee, deleteEmployee } from "../controllers/employees.js";

const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);
router.post('/delete', deleteEmployee);
router.post('/search', SearchEmployees);


export default router;