import User from "../app/entities/user";
import Post from "../app/entities/post";

import UsersRepository from "../app/repositories/usersRepository";
import PostsRepository from "../app/repositories/postsRepository";

import PostsService from "../app/services/postsService";

import PostsController from "../app/controllers/postsController";

class PostModule {
  private static usersRepository = new UsersRepository(User);
  private static postsRepository = new PostsRepository(Post);
  private static postsService = new PostsService(
    PostModule.usersRepository,
    PostModule.postsRepository
  );
  static controller = new PostsController(PostModule.postsService);

  static init() {
    return PostModule.controller;
  }
}

export default PostModule;
