import express from "express";
import associadoController from "./controllers/AssociadoController";
import processoController from "./controllers/processoController";
import { AssociadoRepository } from "./repositories/associadoRepository";

const router = express.Router();

// Associados
router.post("/associados", associadoController.create);
router.get("/associados", associadoController.findAll);
router.get("/associados", associadoController.findByEmail);
router.get("/associados/:id", associadoController.findOne);
router.patch("/associados/:id", associadoController.update);
router.delete("/associados/:id", associadoController.delete);

// Processos

router.post("/processos", processoController.create);
router.get("/processos", processoController.findAll);
router.get("/processos/users/:id", processoController.findAllOfAUser);
router.get("/processos/:id", processoController.findOne);
router.patch("/processos/:id", processoController.update);
router.delete("/processos/:id", processoController.delete);
export { router };


