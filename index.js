import express from "express";
import { products } from "./data/products.js";
import { description } from "./data/description.js";
import { createCartList } from "./controllers/handleCart.js";
import { productList } from "./data/productList.js";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    gamingProducts: products.gamingProducts,
    otherProducts: products.otherProducts,
  });
});

app.get("/cart", (req, res) => {
  let ids = req.query.list;
  if (ids)
    res.render("cart", {
      title: "Cart",
      list: createCartList(ids),
    });
  else res.render("emptyCart", { title: "Cart" });
});

app.get("/item", (req, res) => {
  const data = req.query.product;
  const keys = data.split("_");
  const type = keys[0] === "g" ? "gamingProducts" : "otherProducts";
  const id = parseInt(keys[1]);

  const title = productList[type][id];
  const product = products[type][id];
  const details = description[type][id];

  res.render("product", { title, product, details });
});

app.listen(3000, () =>
  console.log(`Server is listening at http://localhost:${3000}/`)
);
