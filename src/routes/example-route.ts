import { Router } from "express";
import { exampleFunction } from "../controller/example";

const router = Router();

router.post("/example", exampleFunction);

export default router;
