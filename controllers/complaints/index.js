const express = require("express");
const router = express.Router();

router.post("/", require("./post"));

module.exports = router;
