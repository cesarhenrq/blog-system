import User from "../entities/user";

class UsersRepository {
  private model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }
}

export default UsersRepository;
