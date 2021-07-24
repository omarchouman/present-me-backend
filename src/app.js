//any configurations of my express server
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import apiRouter from "./routes/subcategories.js";
import mainCoRouter from "./routes/categoriesRoutes.js";
import singleCoRouter from "./routes/SubEvents.js";
import maincategoriesSchema from './models/mainCategoriesModel.js'


const app = express();

app.use(cors());
app.use(express.json()); 
app.use("/subcategories", apiRouter);
app.use("/maincategories", mainCoRouter);
app.use("/singleevents", singleCoRouter);


dotenv.config();




mongoose.connect(`mongodb+srv://presentme:TLZ7UcxWGYVX-pT@cluster0.itkv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

mongoose.connection
  .once("open", () => console.log("Database is connected successfully!"))
  .on("error", (error) => {
    console.log("We Have An Error: " + error);
  });

mongoose.set('useFindAndModify', false);
app.get("/mainw", async function (req, res) {
  try {
    const pic = await maincategoriesSchema
      .find()

      .populate({
        path: "subcategories",
        populate: {
          path: "events",
        },
      });
    res.send(pic);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default app;
