import User from "../app/entities/user";

import UsersRepository from "../app/repositories/usersRepository";

import UsersService from "../app/services/usersService";

import UsersController from "../app/controllers/usersController";

class UserModule {
  private static repository = new UsersRepository(User);
  private static service = new UsersService(UserModule.repository);
  static controller = new UsersController(UserModule.service);

  static init() {
    return UserModule.controller;
  }
}

export default UserModule;
