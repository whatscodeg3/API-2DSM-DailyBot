import express from "express";
import associadoController from "./controllers/AssociadoController";
import { AssociadoRepository } from "./repositories/associadoRepository";

const router = express.Router();

router.post("/associados", associadoController.create);
router.get("/associados", associadoController.findAll);
router.get("/associados/:id", associadoController.findOne);
router.patch("/associados/:id", associadoController.update);
router.delete("/associados/:id", associadoController.delete);

export { router };