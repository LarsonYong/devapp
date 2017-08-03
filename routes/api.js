/**
 * Created by jack on 8/1/17.
 */
var express=require('express');
var router=express.Router();

var User = require('../database/dataFile');

router.get('/',function(req,resp,next){
    User.find({},function (err,docs) {
        resp.send(docs);
    })
});

module.exports=router;