import { Router } from "express";

import {
  addCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "./caregory.controller.js";

const categoryRouter = Router();
categoryRouter.route("/").post(addCategory).get(getAllCategories);
categoryRouter
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default categoryRouter;
