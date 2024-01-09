const { Category } = require("../models");

const categoryData = [
  {
    category: "Shirts",
  },
  {
    category: "Shorts",
  },
  {
    category: "Music",
  },
  {
    category: "Hats",
  },
  {
    category: "Shoes",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
