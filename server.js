const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const userRouter = require('./frontend/static/js/routes/userRouter.js');
const cartRouter = require('./frontend/static/js/routes/cartRouter.js');
const app = express();



app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/*", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"frontend", "index.html"));
});

app.use('/user', userRouter);

app.use('/cart', cartRouter);



app.use(function (req, res, next) {
    res.status(404).send("Not Found");
    console.error();
});


app.listen(3000, () => {
    console.log(`Express server is running on port: 3000`);
});