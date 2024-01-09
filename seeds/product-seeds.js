const { Product } = require("../models");

const productData = [
  {
    product: "Plain T-Shirt",
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product: "Running Sneakers",
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product: "Branded Baseball Hat",
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product: "Top 40 Music Compilation Vinyl Record",
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product: "Cargo Shorts",
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
