import { ProcessoModel } from "../database/models/modelos";

export interface IProcessoAtributes {
  id?: string | number
  conteudo: string;
  link: string;
  dataProcesso: string;
  idUsuario: string | number;
  caderno: string;
  pagina: number;
}

export interface IProcessoUpdate {
  id?: string | number
  conteudo?: string;
  link: string;
  dataProcesso: string;
  idUsuario?: string | number;
  caderno: string;
  pagina: number;
}


export class ProcessoRepository {
  async findAllOfAUser(idUsuario: string | number) {
    const processos = await ProcessoModel.findAll({
      where: { associadoId: idUsuario }
    });
    return processos;
  }

  async findAll() {
    const processos = await ProcessoModel.findAll({});
    return processos;
  }
  async findOne(id: number | string) {
    const processo = await ProcessoModel.findOne({ where: { id } });
    return processo;
  }

  async create(data: IProcessoAtributes) {
    const { conteudo, idUsuario, dataProcesso, link, caderno, pagina } = data;

    const processo = await ProcessoModel.create({
      conteudo,
      dataProcesso,
      link,
      associadoId: idUsuario,
      caderno,
      pagina
    });
    return processo
  }

  async update(id: number | string, data: IProcessoUpdate) {
    const processo = await ProcessoModel.update({
      data
    }, { where: { id } });

    return processo;
  };

  async delete(id: number | string) {
    await ProcessoModel.destroy({ where: { id } });
  }
}

//export default AssociadoRepository;