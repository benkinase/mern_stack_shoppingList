const express = require("express");
const router = express.Router();

//Item model
const Item = require("../models/Item");

//@route GET api/items
//@desc Get all Items
//@access Public

router.get("/", (req, res) => {
  Item.find()
    .then((items) => res.json({ confirmation: "success", data: items }))
    .catch((err) => {
      res.json({ confirmation: "fail", message: err.message });
    });
});

//@route POST api/items
//@desc create an item
//@access Public

router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.json({ confirmation: "item created", data: item }))
    .catch((err) => {
      res.json({ confirmation: "fail", message: err.message });
    });
});

//@route POST api/items
//@desc delete an item
//@access Public

router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then((item) => item.remove().then(() => res.json({ success: true })))
    .catch((err) => {
      res.json({ success: false });
    });
});

module.exports = router;
