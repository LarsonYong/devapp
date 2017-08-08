/**
 * Created by jack on 8/1/17.
 */
var express=require('express');
var router=express.Router();

var User = require('../database/dataFile');

router.get('/getUserlist',function(req,resp,next){
    User.find({},function (err,docs) {
        resp.send(docs);
    })
});

router.post('/users/authenticate',function (req,res,next) {
    var requestbody = req.body;
    var username = requestbody.username;
    var password = requestbody.password;
    User.find({"Username":username}, function (err,data) {
        if( password === data[0].Password){
            res.send(data);
        }else{
            res.status(401).json({message:'Username or Password is not correct'});
        }
    })
});

router.get('/getUser/:name',function (req,res,next) {
    const username = req.params.name;
    User.find({"Username":username},function (err,data) {
        console.log(data);
        console.log(username);
        if (data){
            res.send(data);
        }else{
            res.status(404).json({message:'User is not found'})
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

router.post('/v5login',function (req,res,next) {
   var username = req.body.username;
   var password = req.body.password;
   if (username || password){

       console.log(res)
   }
});


module.exports=router;