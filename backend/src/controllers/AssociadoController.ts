import { Request, Response } from "express";
import { AssociadoModel } from "../database/models/associados";
import { AssociadoRepository } from "../repositories/associadoRepository";

interface IAssociadoController {
  create: (req: Request, res: Response) => Promise<Response>;
  findAll: (req: Request, res: Response) => Promise<Response>;
  findOne: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;

}


export class AssociadoController implements IAssociadoController {
  private associadoRepository: AssociadoRepository
  constructor(associadoRepository: AssociadoRepository) {
    this.associadoRepository = associadoRepository;
  }

  async create(req: Request, res: Response) {
    const associadoRepository = new AssociadoRepository();
    const associado = await associadoRepository.create(req.body);
    return res.status(201).json(associado);
  };

  async findAll(req: Request, res: Response) {
    try {
      const associadoRepository = new AssociadoRepository();
      const associados = await associadoRepository.findAll();
      return associados.rows.length > 0
        ? res.status(200).json(associados)
        : res.status(200).send(JSON.parse("Nenhum associado encontrado"));
    } catch (err) {
      console.log(err);
    }
  };
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const associadoRepository = new AssociadoRepository();
    const associado = await associadoRepository.findOne(id);
    return associado
      ? res.status(200).json(associado)
      : res.status(404).send("Associado Não encontrado")
  };
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const associadoRepository = new AssociadoRepository();
    await associadoRepository.update(id, req.body);
    return res.status(200).send("Associado atualizado com sucesso");
  };
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const associadoRepository = new AssociadoRepository();
    await associadoRepository.delete(id);
    return res.status(204).send("Associado deletado com sucesso");
  };
}

export default new AssociadoController(new AssociadoRepository);