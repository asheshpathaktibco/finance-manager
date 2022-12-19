const express = require("express");

//Instantiating??
var app = express();

const PORT = 8999;

//ROOT Route for GET requests
app.get("/", (req, res) => {
  res.send("OK");
});

//Route to accept user details
app.post("/userdetails/submit", (req, res) => {
  res.status(200).send("OK");
});

app.listen(PORT, () => {
  console.log(`Listening on PORT : ${PORT}`);
});
