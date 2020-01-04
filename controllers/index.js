
var express = require('express'),
    router = express.Router();

router.use('/users', require('./users'));
router.use('/attendences', require('./attendences'));
router.use('/infos', require('./infos'));

router.get('/', function (req, res) {
    res.render('index', {title: 'Rayhan'});
});

router.get('*', function (req, res) {
    res.status(404).render('error', {
        title: 'Rayhan', error: {
            status: 404,
            stack: 'Not found'
        }
    });
});

module.exports = router;
