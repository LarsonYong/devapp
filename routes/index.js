/**
 * Created by jack on 8/1/17.
 */
var express = require('express');
var router = express.Router();

router.get('/',function (req,resp,next) {
    resp.render('index.html');
});

module.exports = router;