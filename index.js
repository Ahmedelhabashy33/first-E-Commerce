import express from "express";
import { dbConn } from "./database/dbConnection.js";
import { bootStrap } from "./modules/bootstrap.js";
import { AppError } from "./utils/AppError.js";
import { globalError } from "./middleware/globalerror.js";
const app = express();
const port = 3000;
dbConn;
app.use(express.json());
bootStrap(app);
app.use("*", (req, res, next) => {
  next(new AppError(`route not found: ${req.originalUrl}`, 404));
});
app.use(globalError);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
