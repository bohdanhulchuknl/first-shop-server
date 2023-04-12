import { Router } from "express";

import { getClearShoesMen } from '../controllers/clear.controller.js'

const clearRouter = Router();

clearRouter.get("/clear-shoes-men", getClearShoesMen);

export default clearRouter;
