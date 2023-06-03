import Post, { IPost } from "../entities/post";

class PostsRepository {
  private model: typeof Post;

  constructor(model: typeof Post) {
    this.model = model;
  }

  async create(payload: IPost) {
    return this.model.create(payload);
  }
}

export default PostsRepository;
