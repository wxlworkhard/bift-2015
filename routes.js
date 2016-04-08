var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {
        pageInfo: {
            id: 'home'
        }
    });
});

router.get('/package/common', function (req, res) {
    res.render('package', {
        pageInfo: {
            id: 'pkg-common'
        }
    });
});

module.exports = router;