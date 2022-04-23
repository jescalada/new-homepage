const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use('/images', express.static(__dirname + "/images"));
app.use('/styles', express.static(__dirname + "/styles"));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '/index.html'));
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});