import { products } from "../data/products.js";

const createCartList = (ids) => {
  let gplist = [],
    oplist = [];
  let dataList = ids.split("u");
  dataList.forEach((item) => {
    let data = item.split("_");
    let id = parseInt(data[1]);
    data[0] === "g"
      ? gplist.push(products.gamingProducts[id])
      : oplist.push(products.otherProducts[id]);
  });

  const list = gplist.concat(oplist);
  return list;
};

export { createCartList };
