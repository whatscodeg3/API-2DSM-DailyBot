import { sign } from "jsonwebtoken";
import { GenerateTokenProvider } from "../provider/GenerateTokenProvider";

import { AssociadoModel } from "../database/models/modelos";

export interface IAssociadoAuth {
  id?: string;
  nome?: string;
  cpf?: string;
  email?: string;
  senha?: string
  dataNascimento?: Date;

}

interface IRequest {

  senha: string;
  email: string;

}

export class AuthenticateUser {
  async execute({ senha, email }: IRequest) {
    const userAlreadyExist = await AssociadoModel.findOne({ where: { email } }) as IAssociadoAuth;
    if (!userAlreadyExist) throw new Error("User does no exists!");
    const validatingPassword = userAlreadyExist.senha == senha;
    if (!validatingPassword) throw new Error("Password does not match!");

    const generateTokenProvider = new GenerateTokenProvider();
    const token = await generateTokenProvider.execute(userAlreadyExist.id);
    const { id, nome } = userAlreadyExist;

    return { token, email, nome, id };


  }
}
