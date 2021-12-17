const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log(">> DB Connected.");
    },
    (err) => {
      console.log(">> DB Connection Error...");
    }
  );

app.use(cors());
app.use(require("./controllers"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
