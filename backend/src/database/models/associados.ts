// import { DataTypes, Model, Optional } from 'sequelize';
// import db from '../config';

// interface IAssociado {
//   id: number;
//   nome: string;
//   cpf: string;
//   email: string;
//   dataNascimento: Date;
// }

// export interface IAssociadoInput extends Optional<IAssociado, 'id'> { };

// export class Associado extends Model<IAssociado, IAssociadoInput> implements IAssociado {
//   public id!: number;
//   public nome!: string;
//   public cpf!: string;
//   public email!: string;
//   public dataNascimento: Date;
// }

// Associado.init({
//   id: {
//     type: DataTypes.INTEGER.UNSIGNED,
//     autoIncrement: true,
//     primaryKey: true,
//   },
//   nome: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   cpf: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   dataNascimento: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   }
// }, { sequelize: db });

import { DataTypes } from "sequelize";
import db from "../config";

export const AssociadoModel = db.define("associados", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dataNascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

export const ProcessoModel = db.define("processos", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  conteudo: {
    type: DataTypes.STRING(3000),
    allowNull: true,
  },
  dataProcesso: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
});
ProcessoModel.belongsTo(AssociadoModel);
AssociadoModel.hasMany(ProcessoModel);
