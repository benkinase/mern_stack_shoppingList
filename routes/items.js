const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//Item model
const Item = require("../models/Item");

//@route GET api/items
//@desc Get all Items
//@access Public

router.get("/", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => {
      res.json({ confirmation: "fail", message: err.message });
    });
});

//@route POST api/items
//@desc create an item
//@access Public

router.post("/new", (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => {
      res.json({ confirmation: "fail", message: err.message });
    });
});

//@route POST api/items
//@desc delete an item
//@access Public

router.delete("delete/:id", getItem, async (req, res) => {
  try {
    await res.subscriber.remove();
    res.json({ message: "Deleted This Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Middleware
async function getItem(req, res, next) {
  try {
    item = await Item.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: "can't fine item" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.item = item;
  next();
}

module.exports = router;
