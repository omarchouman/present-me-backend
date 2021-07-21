import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cors from "cors";
import userRoutes from "./routes/adminRoute.js";

dotenv.config();
const app = express();

const connection_url = `mongodb+srv://presentme:TLZ7UcxWGYVX-pT@cluster0.itkv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
app.use(express.json());
app.use(Cors());
app.use("/admin", userRoutes);

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => console.log("Database is connected successfully!"))
  .on("error", (error) => {
    console.log("We Have An Error: " + error);
  });

app.listen(8012, () => console.log("server running on port 8012"));
// export default app;
