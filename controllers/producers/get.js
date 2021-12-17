const express = require("express");
const router = express.Router();

const Producer = require("../../models/Producer");
const { ReturnError } = require("../../func");

router.get("/", async (req, res) => {
  try {
    let producers = await Producer.find();
    res.json(producers);
  } catch (e) {
    ReturnError(res, e);
  }
});

module.exports = router;
