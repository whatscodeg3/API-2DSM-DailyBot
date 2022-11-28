import { Request, Response } from "express";
import { AuthenticateUser } from "./auth";


export class AuthenticateUserController {
  constructor(private readonly authenticateUser: AuthenticateUser) { }

  async handle(request: Request, response: Response) {
    try {
      const { senha, email } = request.body;


      const token = await this.authenticateUser.execute({
        senha,
        email,
      });

      return response.json(token);
    } catch (error) {
      console.log(error);
    }

  }


}

export const authenticateUser = new AuthenticateUserController(new AuthenticateUser);