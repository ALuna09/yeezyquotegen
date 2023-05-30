const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.listen(8080, (req, res) => {
    console.log('Listening on port 8080')
})

app.get('/', (req, res) => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => console.error(err))
})