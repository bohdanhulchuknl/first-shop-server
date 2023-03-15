import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
//routers
import categoryRouter from "./routes/categoryRouter.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3002;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

app.use(express.json());
app.use(cors());

app.use("/api/admin/category", categoryRouter)

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
  mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vbflxfv.mongodb.net/?retryWrites=true&w=majority`,
    console.log("Ok")
  )
});
