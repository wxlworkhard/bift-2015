var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {
        pageInfo: {
            id: 'home'
        }
    });
});

module.exports = router;