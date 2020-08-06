const express = require('express');
const router = express.Router();
const crypto = require('crypto');

router.get('/time', (req, res, next) => {
    res.json({
        time: new Date().toISOString()
    });
});

router.post('/hash', (req, res, next) => {
    const plainText = req.body.plainText;
    const hash = crypto.createHash('md5').update(plainText).digest('hex');
    res.json({
        plainText,
        hash,
    });
});

router.get('/:name/:greeting', (req, res, next) => {
    //hello?name=Daniel
    //:name
    //const name = req.query.name;
    const name = req.params.name;
    const greeting = req.params.greeting;
    res.render('hello', { name, greeting });
});

module.exports = router;