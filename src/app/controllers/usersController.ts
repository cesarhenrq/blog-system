import { Request, Response } from "express";

import UsersService from "../services/usersService";

class UsersController {
  private service: UsersService;

  constructor(service: UsersService) {
    this.service = service;
  }
}

export default UsersController;
