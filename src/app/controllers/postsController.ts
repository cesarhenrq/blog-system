import { Request, Response } from "express";

import PostsService from "../services/postsService";

class PostsController {
  private service: PostsService;

  constructor(service: PostsService) {
    this.service = service;
  }
}

export default PostsController;
