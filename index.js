import express from "express";
import { gamingProducts, otherProducts } from "./data.js";
import { createCartList } from "./controllers/handleCart.js";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    gamingProducts,
    otherProducts,
    title: "Home",
  });
});

app.get("/cart", (req, res) => {
  let ids = req.query.list;
  if (ids)
    res.render("cart", {
      list: createCartList(ids),
      title: "Cart",
    });
  else res.render("emptyCart", { title: "Cart" });
});

app.listen(3000, () =>
  console.log(`Server is listening at http://localhost:${3000}/`)
);
