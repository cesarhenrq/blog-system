import User, { IUser } from "../entities/user";

class UsersRepository {
  private model: typeof User;

  constructor(model: typeof User) {
    this.model = model;
  }

  async create(user: IUser) {
    return this.model.create(user);
  }

  async findById(id: string) {
    return this.model.findById(id);
  }
}

export default UsersRepository;
