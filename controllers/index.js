const express = require("express");
const router = express.Router();

router.use("/api/producers", require("./producers"));
router.use("/api/complaints", require("./complaints"));

module.exports = router;
