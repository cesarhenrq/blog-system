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

  async getAll(query: any) {
    try {
      const users = await this.repository.getAll();

      let page = !!query.page ? parseInt(query.page) : 1;

      let limit = !!query.limit ? parseInt(query.limit) : 10;

      let startIndex = (page - 1) * limit;
      let finalIndex = page * limit;

      let results = users.slice(startIndex, finalIndex);

      return {
        statusCode: 200,
        message: "Users fetched successfully",
        data: results,
      };
    } catch (error: any) {
      return { statusCode: 500, message: error.message, data: null };
    }
  }
}

export default UsersService;
