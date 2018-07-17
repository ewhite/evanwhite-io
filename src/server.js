const express = require('express');
const path = require('path');

const app = express();

// use compress middleware to gzip
app.use(express.compress());

// serve up content from public directory
app.use(express.static(path.relative(__dirname, '../')));

app.listen(process.env.PORT || 8080);