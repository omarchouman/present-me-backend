import app from './app';
import categoriesRoutes from "./routes/categoriesRoutes";
import subcategories from "./routes/subcategories.js";
import subEvents from "./routes/SubEvents";
import userRoutes from "./routes/adminRoute";

app.use("/admin", userRoutes);

app.listen(8000, ()=> console.log("server running on port 8000"));




