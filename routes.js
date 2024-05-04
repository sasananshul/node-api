const express = require('express');
const router = express.Router();

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.json({ name });
});

router.get('/greet', (req, res) => {
    res.json('Hello World!');
});

module.exports = router;