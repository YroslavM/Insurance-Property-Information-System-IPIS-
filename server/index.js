const express = require("express");

const app = express();

app.get("/test", (req, res) => {
  res.send("Hello test");
});

app.listen(5000, () => {
  console.log("server started on 5000 PORT");
});
