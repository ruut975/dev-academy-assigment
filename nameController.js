const express = require("express");
const fs = require("fs");

const app = express();

const readNamesFromFile = () => {
    const file = fs.readFileSync("./names.json",
        "utf-8", 
        (err) => console.log(err));
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