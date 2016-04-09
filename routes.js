var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('home', {
        pageInfo: {
            id: 'home'
        }
    });
});

router.get('/package/:pkgcode', function (req, res) {
    var pkgcode = req.params.pkgcode
    var pageInfo = {};
    
    if (pkgcode === '0001') {
        
    } else {
        // 通用主题包首页
        pageInfo.id = 'pkg-common';
        pageInfo.pkgcode = 'common';
    }
    
    res.render('package', {
        pageInfo: pageInfo
    });
});

router.get('/:pkgcode/detail/:type(image|video)', function (req, res) {
   var type = req.params.type;
   
   res.render('detail', {
        pageInfo: {
            id: type
        }
    }); 
});

module.exports = router;