const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, Authentication"
  );
  next();
});

const readNamesFromFile = () => {
  const file = fs.readFileSync("./names.json", "utf-8", (err) =>
    console.log(err)
  );
  return JSON.parse(file);
};

app.get("/names", (req, res) => {
  const names = readNamesFromFile();
  if (names) {
    res.json(names);
  } else {
    res.status(404).end();
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
