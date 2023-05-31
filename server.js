const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "build")))

console.log('');

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/build/index.html`)
})

app.get('/poop', (req, res) => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => console.error(err))
})

app.listen(8080, (req, res) => {
    console.log('Listening on port 8080')
})