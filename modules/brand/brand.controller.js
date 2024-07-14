import slugify from "slugify";

import { Brand } from "../../database/models/brand.model.js";
import { CatchError } from "../../middleware/CatchError.js";

const addbrand = CatchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let brand = new Brand(req.body);
  await brand.save();
  res.json({ message: "success", brand });
});
const getAllbrands = CatchError(async (req, res, next) => {
  let brands = await Brand.find();
  res.json({ message: "success", brands });
});
const getbrand = CatchError(async (req, res, next) => {
  let brand = await Brand.findById(req.params.id);
  brand || res.json({ message: "brand not found" });
  !brand || res.json({ message: "success", brand });
});
const updatebrand = CatchError(async (req, res, next) => {
  req.body.slug = slugify(req.body.name);
  let brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  brand || res.json({ message: "brand not found" });
  !brand || res.json({ message: "success", brand });
});
const deletebrand = CatchError(async (req, res, next) => {
  let brand = await Brand.findByIdAndDelete(req.params.id);
  brand || res.json({ message: "brand not found" });
  !brand || res.json({ message: "success", brand });
});
export { addbrand, getAllbrands, getbrand, updatebrand, deletebrand };
