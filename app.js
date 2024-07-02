const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const entries = require('./routes/entries');

const app = express();
const port = process.env.PORT || 5500;

mongoose.connect('mongodb://localhost:27017/textToColumns', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/entries', entries);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${5500}`);
});
