import { EscolaModel } from "../database/models/associados";

export interface IEscolaAtributes {
  nome?: string;
}




export class EscolaRepository {
  async findAll() {
    const escolas = await EscolaModel.findAll({});
    return escolas;
  }

  async findOne(id: number | string) {
    const escola = await EscolaModel.findOne({ where: { id } })
    return escola;
  }

  async findByName(name: string) {
    const escola = await EscolaModel.findOne({ where: { name } });
    return escola;
  }

  async create(data: IEscolaAtributes) {
    const { nome } = data;
    const escola = await EscolaModel.create({
      nome,
    });
    return escola
  }

  async update(id: number | string, data: IEscolaAtributes) {
    const escola = await EscolaModel.update({
      data
    }, { where: { id } });

    return escola;
  };

  async delete(id: number | string) {
    await EscolaModel.destroy({ where: { id } });
  }
}