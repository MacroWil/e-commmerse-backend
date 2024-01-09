const { Tag } = require("../models");

const tagData = [
  {
    tag: "rock music",
  },
  {
    tag: "pop music",
  },
  {
    tag: "blue",
  },
  {
    tag: "red",
  },
  {
    tag: "green",
  },
  {
    tag: "white",
  },
  {
    tag: "gold",
  },
  {
    tag: "pop culture",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
