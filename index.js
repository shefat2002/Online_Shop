import express from "express";
import { gamingProducts, otherProducts } from "./data.js";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { gamingProducts, otherProducts });
});
app.listen(3000, () =>
  console.log(`Server is listening at http://localhost:${3000}/`)
);
