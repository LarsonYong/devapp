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

router.post('/users/authenticate',function (req,res,next) {
    console.log(req.body);
    var requestbody = req.body;
    var username = requestbody.Username;
    var password = requestbody.Password;
    User.find({"Username":username}, function (err,data) {
        res.send(data.Password);
        console.log('123');
        if( password === data.password){

        }
    })
});

router.post('/register',function (req,res,next) {
    if( !req.body.username || !req.body.username){
        return res.status(400).json({message: 'please enter register data'})
    }
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.save(function (err) {
        if(err){
            return next(err);
        }
        return res.json({token:user.name})
    });

});




module.exports=router;