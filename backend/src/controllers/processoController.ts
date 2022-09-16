import { Request, Response } from "express";
import { ProcessoModel } from "../database/models/associados";
import { ProcessoRepository } from "../repositories/processoRepository";

interface IProcessoController {
  create: (req: Request, res: Response) => Promise<Response>;
  findAll: (req: Request, res: Response) => Promise<Response>;
  findOne: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;

}


export class ProcessoController implements IProcessoController {
  private processoRepository: ProcessoRepository
  constructor(processoRepository: ProcessoRepository) {
    this.processoRepository = processoRepository;
  }

  async create(req: Request, res: Response) {
    const processoRepository = new ProcessoRepository();
    const processo = await processoRepository.create(req.body);
    return res.status(201).json(processo);
  };

  async findAllOfAUser(req: Request, res: Response) {
    const idUsuario = Number(req.params)
    try {
      const processoRepository = new ProcessoRepository();
      const processos = await processoRepository.findAllOfAUser(idUsuario);
      return processos.length > 0
        ? res.status(200).json(processos)
        : res.status(200).send(JSON.parse("Nenhum processo encontrado"));
    } catch (err) {
      console.log(err);
    }
  };

  async findAll(req: Request, res: Response) {
    try {
      const processoRepository = new ProcessoRepository();
      const processos = await processoRepository.findAll();
      return processos.length > 0
        ? res.status(200).json(processos)
        : res.status(200).send("Nenhum processo encontrado");
    } catch (err) {
      console.log(err);
    }
  };
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const processoRepository = new ProcessoRepository();
    const processo = await processoRepository.findOne(id);
    return processo
      ? res.status(200).json(processo)
      : res.status(404).send("Associado Não encontrado")
  };
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const processoRepository = new ProcessoRepository();
    await processoRepository.update(id, req.body);
    return res.status(200).send("Associado atualizado com sucesso");
  };
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const associadoRepository = new ProcessoRepository();
    await associadoRepository.delete(id);
    return res.status(204).send("Associado deletado com sucesso");
  };
}

export default new ProcessoController(new ProcessoRepository);