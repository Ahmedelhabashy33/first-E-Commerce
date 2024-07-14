import { Router } from "express";

import {
  addSubCategory,
  getAllsubCategories,
  getsubCategory,
  updatesubCategory,
  deletesubCategory,
} from "./subcategory.controller.js";

const subcategoryRouter = Router();
subcategoryRouter.route("/").post(addSubCategory).get(getAllsubCategories);
subcategoryRouter
  .route("/:id")
  .get(getsubCategory)
  .put(updatesubCategory)
  .delete(deletesubCategory);

export default subcategoryRouter;
