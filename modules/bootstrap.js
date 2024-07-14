import branRouter from "./brand/brand.routes.js";
import categoryRouter from "./category/category.routes.js";
import subcategoryRouter from "./subcategory/subcaategory.routes.js";
export const bootStrap = (app) => {
  app.use("/api/categories", categoryRouter);
  app.use("/api/subcategories", subcategoryRouter);
  app.use("/api/brandes", branRouter);
};
