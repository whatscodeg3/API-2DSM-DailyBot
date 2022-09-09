import { Request, Response } from "express";
import { AssociadoModel } from "../database/models/associados";

interface IAssociadoController {
  create: (req: Request, res: Response) => Promise<Response>;
  findAll: (req: Request, res: Response) => Promise<Response>;
  findOne: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;

}

class AssociadoController implements IAssociadoController {
  async create(req: Request, res: Response) {
    const { nome, cpf, email, dataNascimento } = req.body;
    const associado = await AssociadoModel.create({
      nome,
      cpf,
      email,
      dataNascimento,
    });
    return res.status(201).json(associado);
  };

  async findAll(req: Request, res: Response) {
    const associados = await AssociadoModel.findAndCountAll({});
    return associados.rows.length > 0
      ? res.status(200).json(associados)
      : res.status(404).send("Nenhum associado encontrado");
  };
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const associado = await AssociadoModel.findOne({ where: { id } });
    return associado
      ? res.status(200).json(associado)
      : res.status(404).send("Associado Não encontrado")
  };
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, cpf, email, dataNascimento } = req.body;
    await AssociadoModel.update({
      nome,
      cpf,
      email,
      dataNascimento,
    }, { where: { id } });
    return res.status(200).send("Associado atualizado com sucesso");
  };
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await AssociadoModel.destroy({ where: { id } })
    return res.status(204).send("Associado deletado com sucesso");
  };

}

export default new AssociadoController();