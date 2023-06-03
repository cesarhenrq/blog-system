import UsersRepository from "../repositories/usersRepository";
import PostsRepository from "../repositories/postsRepository";

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
}

export default PostsService;
