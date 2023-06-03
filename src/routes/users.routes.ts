import { Router } from "express";

import UserModule from "../modules/userModule";

const usersRouter = Router();

const userModule = UserModule.build();

usersRouter.post("/", userModule.create.bind(userModule));

export default usersRouter;
