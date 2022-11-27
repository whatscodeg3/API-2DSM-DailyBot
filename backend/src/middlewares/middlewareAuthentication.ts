import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) return res.status(401).json({ message: "Token is missing" });

  const token = authToken.replace('Bearer', '').trim();

  try {
    verify(token, 'secret');

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Token invalid" });
  }
}