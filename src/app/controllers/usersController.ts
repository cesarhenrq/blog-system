import { Request, Response } from "express";

import UsersService from "../services/usersService";

import { object, string } from "yup";

class UsersController {
  private service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    const { body: payload } = req;

    const payloadSchema = object().shape({
      fullname: string().required(),
      nickname: string().required(),
      email: string().email().required(),
    });

    try {
      await payloadSchema.validate(payload);
    } catch (error: any) {
      return res.status(400).json({ messages: error.errors, data: null });
    }

    const { statusCode, message, data } = await this.service.create(payload);

    return res.status(statusCode).json({ message, data });
  }
}

export default UsersController;
