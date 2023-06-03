import User from "../app/entities/user";
import Post from "../app/entities/post";

import UsersRepository from "../app/repositories/usersRepository";
import PostsRepository from "../app/repositories/postsRepository";

import PostsService from "../app/services/postsService";

import PostsController from "../app/controllers/postsController";

class PostModule {
  static init() {
    const usersRepository = new UsersRepository(User);
    const postsRepository = new PostsRepository(Post);
    const postsService = new PostsService(usersRepository, postsRepository);
    const controller = new PostsController(postsService);

    return controller;
  }
}

export default PostModule;
