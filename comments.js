// Create web server
// import express
const express = require('express');
// import path
const path = require('path');
// import body-parser
const bodyParser = require('body-parser');
// import data
const data = require('./data');
// create express app
const app = express();
// set port
const port = 3000;
// use body-parser
app.use(bodyParser.json());
// use static files
app.use(express.static(path.join(__dirname, 'public')));
// get comments
app.get('/comments', (req, res) => {
    res.json(data);
});
// post comment
app.post('/comments', (req, res) => {
    const newComment = {
        id: data.length + 1,
        name: req.body.name,
        comment: req.body.comment
    };
    data.push(newComment);
    res.json(newComment);
});
// listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// export app
module.exports = app;