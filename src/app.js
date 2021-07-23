//any configurations of my express server
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";



const app = express();

app.use(cors());

// app.use(express.bodyParser());

app.use(express.json()); 
app.use(express.urlencoded()); 



dotenv.config();
const app = express();



mongoose.connect(`mongodb+srv://presentme:TLZ7UcxWGYVX-pT@cluster0.itkv6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => console.log("Database is connected successfully!"))
  .on("error", (error) => {
    console.log("We Have An Error: " + error);
  });

mongoose.set('useFindAndModify', false);

export default app;
