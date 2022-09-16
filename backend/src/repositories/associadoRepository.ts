import { AssociadoModel } from "../database/models/associados";

export interface IAssociadoAtributes {
  nome: string;
  cpf?: string;
  email: string;
  dataNascimento: Date;
}

export interface IAssociadoUpdate {
  nome?: string;
  cpf?: string;
  email?: string;
  dataNascimento?: Date;
}


export class AssociadoRepository {
  async findAll() {
    const associados = await AssociadoModel.findAndCountAll({});
    return associados;
  }

  async findOne(id: number | string) {
    const associado = await AssociadoModel.findOne({});
    return associado;
  }

  async create(data: IAssociadoAtributes) {
    const associado = await AssociadoModel.create({
      data,
    });
    return associado
  }

  async update(id: number | string, data: IAssociadoUpdate) {
    const associado = await AssociadoModel.update({
      data
    }, { where: { id } });

    return associado;
  };

  async delete(id: number | string) {
    await AssociadoModel.destroy({ where: { id } });
  }
}

//export default AssociadoRepository;