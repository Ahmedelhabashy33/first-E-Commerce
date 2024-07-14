import { Router } from "express";

import {
  addbrand,
  getAllbrands,
  getbrand,
  updatebrand,
  deletebrand,
} from "./brand.controller.js";

const branRouter = Router();
branRouter.route("/").post(addbrand).get(getAllbrands);
branRouter.route("/:id").get(getbrand).put(updatebrand).delete(deletebrand);

export default branRouter;
