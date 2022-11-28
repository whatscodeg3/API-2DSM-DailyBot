import { sign } from "jsonwebtoken";

export class GenerateTokenProvider {
  async execute(userId: string) {
    const token = sign({}, 'secret', {
      subject: String(userId),
      expiresIn: "864000s",
    });

    return token;
  }
}