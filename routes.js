const express = require('express');
const router = express.Router();

router.get('/greet', (req, res) => {
    res.json('Hello World!');
});

router.get('/:name', (req, res) => {
    const { name } = req.params;
    res.json({ name });
});

module.exports = router;
