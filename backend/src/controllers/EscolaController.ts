import { Request, Response } from "express";
import { EscolaRepository } from "../repositories/escolaRepository";

interface IEscolaController {
  create: (req: Request, res: Response) => Promise<Response>;
  findAll: (req: Request, res: Response) => Promise<Response>;
  findOne: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;

}


export class EscolaController implements IEscolaController {
  private escolaRepository: EscolaRepository
  constructor(escolaRepository: EscolaRepository) {
    this.escolaRepository = escolaRepository;
  }

  async create(req: Request, res: Response) {
    try {
      const escolaRepository = new EscolaRepository();
      const escola = await escolaRepository.create(req.body);
      return res.status(201).json(escola);
    }
    catch (error) {
      console.log(error);
    }
  };

  async findAll(req: Request, res: Response) {
    try {
      const escolaRepository = new EscolaRepository();
      const associados = await escolaRepository.findAll();
      return associados.length > 0
        ? res.status(200).json(associados)
        : res.status(200).send(JSON.parse("Nenhum associado encontrado"));
    } catch (err) {
      console.log(err);
    }
  };
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const escolaRepository = new EscolaRepository();
    const escola = await escolaRepository.findOne(id);
    return escola
      ? res.status(200).json(escola)
      : res.status(404).send("Associado Não encontrado")

  };

  async findByEmail(req: Request, res: Response) {
    const { name } = req.body;
    const escolaRepository = new EscolaRepository();
    const escola = await escolaRepository.findByName(name);
    return escola
      ? res.status(200).json(escola)
      : res.status(404).send("Associado Não encontrado")
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const escolaRepository = new EscolaRepository();
    await escolaRepository.update(id, req.body);
    return res.status(200).send("Associado atualizado com sucesso");
  };
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const escolaRepository = new EscolaRepository();
    await escolaRepository.delete(id);
    return res.status(204).send("Associado deletado com sucesso");
  };
}

export default new EscolaController(new EscolaRepository);