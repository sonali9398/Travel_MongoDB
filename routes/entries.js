const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');

router.post('/', async (req, res) => {
    try {
        const { name, address, color, place, class: className, price } = req.body;
        const newEntry = new Entry({ name, address, color, place, class: className, price });
        await newEntry.save();
        res.status(201).send(newEntry);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
