const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    name: String,
    address: String,
    color: String,
    place: String,
    class: String,
    price: String,
});

module.exports = mongoose.model('Entry', EntrySchema);
