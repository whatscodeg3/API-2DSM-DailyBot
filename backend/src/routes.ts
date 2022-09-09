import express from "express";
import AssociadoController from "./controllers/AssociadoController";

const router = express.Router();

router.post("/associados", AssociadoController.create);
router.get("/associados", AssociadoController.findAll);
router.get("/associados/:id", AssociadoController.findOne);
router.patch("/associados/:id", AssociadoController.update);
router.delete("/associados/:id", AssociadoController.delete);

export { router };