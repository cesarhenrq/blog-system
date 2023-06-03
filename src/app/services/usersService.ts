import UsersRepository from "../repositories/usersRepository";

class UsersService {
  private repository: UsersRepository;

  constructor(repository: UsersRepository) {
    this.repository = repository;
  }
}

export default UsersService;
