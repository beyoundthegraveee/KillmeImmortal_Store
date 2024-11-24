const express = require('express');
const path = require('path');

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"frontend", "index.html"));
});


app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(3000, () => {
    console.log(`Express server is running on port: 3000`);
});