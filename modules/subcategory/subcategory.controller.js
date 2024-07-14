import slugify from "slugify";
import { subCategory } from "../../database/models/Subcategory.model.js";
import { CatchError } from "../../middleware/CatchError.js";

const addSubCategory = CatchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let subcategory = new subCategory(req.body);
  await subcategory.save();
  res.json({ message: "success", subcategory });
});
const getAllsubCategories = CatchError(async (req, res, next) => {
  let subcategories = await subCategory.find();
  res.json({ message: "success", subcategories });
});
const getsubCategory = CatchError(async (req, res, next) => {
  let subcategory = await subCategory.findById(req.params.id);
  subcategory || res.json({ message: "subcategory not found" });
  !subcategory || res.json({ message: "success", subcategory });
});
const updatesubCategory = CatchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let subcategory = await subCategory.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  subcategory || res.json({ message: "subcategory not found" });
  !subcategory || res.json({ message: "success", subcategory });
});
const deletesubCategory = CatchError(async (req, res, next) => {
  let subcategory = await subCategory.findByIdAndDelete(req.params.id);
  subcategory || res.json({ message: "subcategory not found" });
  !subcategory || res.json({ message: "success", subcategory });
});
export {
  addSubCategory,
  getAllsubCategories,
  getsubCategory,
  updatesubCategory,
  deletesubCategory,
};
