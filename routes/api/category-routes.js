const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products

router.get("/", async (req, res) => {
  try {
    const catData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(catData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
// be sure to include its associated Products
router.get("/:id", async (req, res) => {
  try {
    const catId = await Category.findByPk(req.params.id, {
      include: [{ model: Reader }],
    });

    if (!catId) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(catId);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const newCat = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put("/", async (req, res) => {
  try {
    const upd8Cat = await Category.update({
      id: req.params.id,
    });
    if (!upd8Cat) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    res.status(200).json(upd8Cat);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const killCat = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!killCat) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(killCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
