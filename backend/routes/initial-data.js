import express from "express";
import InitializeDataController from "../controllers/initialize.js";

const router = express.Router();

router.get("/examples", InitializeDataController.initializeExampleData);

export default router;
