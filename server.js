const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "build")))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.get('/quotes', (req, res) => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            res.send(data);
        })
        .catch(err => console.error(err))
})

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000')
})