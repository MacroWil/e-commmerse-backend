const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
// be sure to include its associated Product data
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find a single tag by its `id`
// be sure to include its associated Product data
router.get("/:id", async (req, res) => {
  try {
    const tagId = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!tagId) {
      res.status(404).json({ message: "No Tag found with that id!" });
      return;
    }

    res.status(200).json(tagId);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const upd8Tag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!upd8Tag) {
      res.status(404).json({ message: "No Tag found with that id!" });
      return;
    }
    res.status(200).json(upd8Tag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// delete a tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const killTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!killTag) {
      res.status(404).json({ message: "No tag found with that id!" });
      return;
    }

    res.status(200).json(killTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
