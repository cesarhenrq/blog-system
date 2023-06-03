import { Request, Response } from "express";

import { object, string } from "yup";

import PostsService from "../services/postsService";

class PostsController {
  private service: PostsService;

  constructor(service: PostsService) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    const { body: payload } = req;

    const payloadSchema = object().shape({
      content: string().required().min(1).max(280),
      author: string().required(),
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

export default PostsController;
