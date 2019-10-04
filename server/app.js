const express = require('express');
const app     = express();
const port    = 3000;

parser = require("body-parser");
//routes = require("./routes.js");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
//app.use("/api", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

