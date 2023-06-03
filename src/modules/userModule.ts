import User from "../app/entities/user";

import UsersRepository from "../app/repositories/usersRepository";

import UsersService from "../app/services/usersService";

import UsersController from "../app/controllers/usersController";

class UserModule {
  static build() {
    const repository = new UsersRepository(User);
    const service = new UsersService(repository);
    const controller = new UsersController(service);

    return controller;
  }
}

export default UserModule;
