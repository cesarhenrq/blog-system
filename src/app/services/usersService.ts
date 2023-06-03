import { IUser } from "../entities/user";
import UsersRepository from "../repositories/usersRepository";

class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }

  async create(payload: IUser) {
    try {
      const user = await this.repository.create(payload);

      return {
        statusCode: 201,
        message: "User created successfully",
        data: user,
      };
    } catch (error: any) {
      return { statusCode: 500, message: error.message, data: null };
    }
  }
}

export default UsersService;
