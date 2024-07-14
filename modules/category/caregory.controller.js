import slugify from "slugify";
import { Category } from "../../database/models/category.model.js";
import { CatchError } from "../../middleware/CatchError.js";

const addCategory = CatchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let category = new Category(req.body);
  await category.save();
  res.json({ message: "success", category });
});
const getAllCategories = CatchError(async (req, res, next) => {
  let category = await category.find();
  res.json({ message: "success", category });
});
const getCategory = CatchError(async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  category || res.json({ message: "category not found" });
  !category || res.json({ message: "success", category });
});
const updateCategory = CatchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  category || res.json({ message: "category not found" });
  !category || res.json({ message: "success", category });
});
const deleteCategory = CatchError(async (req, res, next) => {
  let category = await Category.findByIdAndDelete(req.params.id);
  category || res.json({ message: "category not found" });
  !category || res.json({ message: "success", category });
});
export {
  addCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
