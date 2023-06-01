function buyNow(button) {
  var card = button.closest(".card-content");

  var imageSrc = card.querySelector(".card-img").src;
  var title = card.querySelector(".card-title").textContent;
  var rating = card.querySelector(".rating-value").textContent;
  var price = card.querySelector(".card-price").textContent;

  var product = {
    image: imageSrc,
    title: title,
    rating: rating,
    price: price,
  };

  return product;
}
const products = {
  0: {
    image: "/images/xboxone.png",
    title: "Xbox One",
    rating: "4.1",
    price: "$449.99",
  },
  1: {
    image: "/images/ps4.png",
    title: "Playstation 4",
    rating: "4.3",
    price: "$449.99",
  },
  2: {
    image: "/images/switch.png",
    title: "Nintendo Switch",
    rating: "4.4",
    price: "$349.99",
  },
  3: {
    image: "/images/switchpad.png",
    title: "Nintendo Switch Pad",
    rating: "4.4",
    price: "$99.99",
  },
  4: {
    image: "/images/ps4con.png",
    title: "PS4 Controller Design",
    rating: "4.0",
    price: "$149.99",
  },
  5: {
    image: "/images/ps4conblack.png",
    title: "PS4 Controller Black",
    rating: "4.4",
    price: "$149.99",
  },
  6: {
    image: "/images/ps4conwhite.png",
    title: "PS4 Controller White",
    rating: "4.5",
    price: "$149.99",
  },
  7: {
    image: "/images/xcon.png",
    title: "Xbox Controller Design",
    rating: "4.3",
    price: "$139.99",
  },
  8: {
    image: "/images/xconblack.png",
    title: "Xbox Controller Black",
    rating: "4.5",
    price: "$139.99",
  },
  9: {
    image: "/images/xconwhite.png",
    title: "Xbox Controller White",
    rating: "4.9",
    price: "$139.99",
  },
  10: {
    image: "/images/HP%20Spectre%20x360%2015.png",
    title: "HP Spectre x360 15",
    rating: "4.5",
    price: "$650.99",
  },
  11: {
    image: "/images/laptop%203.png",
    title: "HP Spectre x360 15",
    rating: "4",
    price: "$550.99",
  },
  12: {
    image: "/images/ipad.png",
    title: "Apple Ipad 15",
    rating: "4.6",
    price: "$750.99",
  },
  13: {
    image: "/images/Apple-iPhone-12-Pro.png",
    title: "Apple iPhone 12 Pro",
    rating: "4.7",
    price: "$1000.99",
  },
  14: {
    image: "/images/g233%20prodigy%20gaming%20headset.png",
    title: "g233 prodigy gaming headset",
    rating: "4.5",
    price: "$450.99",
  },
  15: {
    image: "/images/ROG%20StrixmWireless%20gaming%20headset.png",
    title: "ROG Strixm Wireless gaming",
    rating: "4.4",
    price: "$350.99",
  },
  16: {
    image: "/images/Nike%20Running%20Shoese.png",
    title: "Nike Running Shoese",
    rating: "4.5",
    price: "$250.99",
  },
  17: {
    image: "/images/Running%20Shoes.png",
    title: "Running Shoes",
    rating: "4.4",
    price: "$150.99",
  },
};
