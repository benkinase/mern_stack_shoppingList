const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const items = require("./routes/items");
const app = express();

//middleware
app.use(bodyParser.json());
app.use("/api/items", items);

//DB config
const db = require("./config/keys").mongoURL;
option1 = { useNewUrlParser: true, useUnifiedTopology: true };
//connect to mongodb
mongoose
  .connect(db, option1)
  .then(() => console.log("Mongo connected"))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server currently listening on port ${port}`);
});
