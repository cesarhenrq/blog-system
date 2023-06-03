import UsersRepository from "../repositories/usersRepository";
import PostsRepository from "../repositories/postsRepository";

import { IPost } from "../entities/post";

class PostsService {
  private usersRepository: UsersRepository;
  private postsRepository: PostsRepository;

  constructor(
    usersRepository: UsersRepository,
    postsRepository: PostsRepository
  ) {
    this.usersRepository = usersRepository;
    this.postsRepository = postsRepository;
  }

  async create(payload: IPost) {
    try {
      const { author } = payload;

      const user = await this.usersRepository.findById(author);

      if (!user) {
        return {
          statusCode: 404,
          message: "User not found",
          data: null,
        };
      }

      const post = await this.postsRepository.create(payload);

      await this.usersRepository.associatePost(author, post._id);

      return {
        statusCode: 201,
        message: "Post created successfully",
        data: post,
      };
    } catch (error) {
      return {
        statusCode: 500,
        message: "Internal server error",
        data: null,
      };
    }
  }
}

export default PostsService;
