import express from "express";

import {
  getSub,
  createSub,
  updateSub,
  deleteSub,
  getbyidSub,
  getElementid,
} from "../controllers/subcategoriesController.js";
const app = express();

app.get("/subcategories/get/:id", getElementid, getbyidSub);

app.get("/subcategories/get", getSub);

app.post("/subcategories/create", createSub);

app.put("/subcategories/update/:id", getElementid, updateSub);

app.delete("/subcategories/delete/:id", getElementid, deleteSub);

export default app;
