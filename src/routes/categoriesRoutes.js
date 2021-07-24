import app from "../app";

import {
  createSub,
  updateSub,
  deleteSub,
  getbyidSub,
  getElementid,
} from "../controllers/categoriesController.js";

app.get("maincategory/:id", getElementid, getbyidSub);

app.post("maincategory", createSub);

app.patch("maincategory/:id", getElementid, updateSub);

app.delete("maincategory/:id", getElementid, deleteSub);


// import app from "../app";
// import { createCategory, deleteCategory, getCategories, getCategory, updateCategory } from "../controllers/categoriesController.js";

// app.get("/categories/get", getCategories);

// app.get("/categories/get/:categoryId", getCategory);

// app.post("/categories/create", createCategory);

// app.put("/categories/update/:id", updateCategory);

// app.delete("/categories/delete/:id", deleteCategory);
