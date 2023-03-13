import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors())

const fetchProd = async () => {
    try {
        const allProd = await axios.get("https://msdrop.com.ua/export/myvO/json")
        console.log(allProd)
    } catch (err) {
        console.log(err)
    }
}

app.listen(5000, () => {

  console.log("Started");
  fetchProd()
});
