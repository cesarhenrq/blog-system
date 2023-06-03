import { Router } from "express";

import PostModule from "../modules/postModule";

const postsRouter = Router();

const postModule = PostModule.init();

postsRouter.post("/", postModule.create.bind(postModule));

export default postsRouter;
