import { gamingProducts, otherProducts } from "../data.js";

const createCartList = (ids) => {
  let gplist = [],
    oplist = [];
  let dataList = ids.split("u");
  dataList.forEach((item) => {
    let data = item.split("_");
    let id = parseInt(data[1]);
    data[0] === "g"
      ? gplist.push(gamingProducts[id])
      : oplist.push(otherProducts[id]);
  });

  const list = gplist.concat(oplist);
  return list;
};

export { createCartList };
