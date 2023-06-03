import Post from "../entities/post";

class PostsRepository {
  private model: typeof Post;

  constructor(model: typeof Post) {
    this.model = model;
  }
}

export default PostsRepository;
