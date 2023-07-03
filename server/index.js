const express = require("express");
const actions = require("./actions");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.send("Choose the api you want to use");
});

app.get("/api/getHotelsByCriteria", actions.getHotelsByCriteria);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
