import express from "express";
import associadoController from "./controllers/AssociadoController";
import processoController from "./controllers/processoController";
import escolaController from "./controllers/EscolaController";
import { authenticateUser } from './auth/AuthenthicateController'
import { ensureAuthenticated } from './middlewares/middlewareAuthentication';



export const router = express.Router();

// Associados
router.post("/associados", associadoController.create);
router.get("/associados", associadoController.findAll);
router.get("/associados/findByEmail/:email", associadoController.findByEmail);
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

// Escolas

router.post("/escolas", escolaController.create);
router.get("/escolas", escolaController.findAll);
router.get("/escolas", escolaController.findByName);
router.get("/escolas/:id", escolaController.findOne);
router.patch("/escolas/:id", escolaController.update);
router.delete("/escolas/:id", escolaController.delete);


// Login
router.post("/login", authenticateUser.handle.bind(authenticateUser));
