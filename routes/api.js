/**
 * Created by jack on 8/1/17.
 */
var express=require('express');
var http =require('http');
var router=express.Router();
var ObjectID = require('mongodb').ObjectID;
var mongoose = require('mongoose');
// Connection URL
var db = 'mongodb://localhost:27017/userDetails';

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

router.post('/user/add',function (req,res,next) {
   const username = req.body.username;
   const password = req.body.password;
   var user = {
       Username: username,
       Password: password
   };
   mongoose.connect(db,function (error) {
       if (error){
           console.log(error)
       }
   });
   if(db.find({"username":"Jack"})){
       console.log("Success")
   }
   // db.insert(user,function(err, records){
   //      console.log("Record added as "+records[0]._id);
   //  });
   // if(User.find({"Username":username})){
   //     res.send("Success add user")
   // }else{
   //     res.status(404).json({message:'Not success!'})
   // }

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
    const postData = querystring.stringify({
        'username': username,
        'password': password
    });
    const options = {
        hostname: 'http://10.70.32.60',
        port: '4480',
        path: 'http://10.70.32.60:4480/api/units/getAllConnectedUnits',
        method: 'GET',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With"
        }
    };
    this.getJSON(options,function (statusCode,result) {
        console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        res.statusCode = statusCode;
        res.send(JSON.stringify(result));
    })

});

exports.getJSON = function(options, onResult)
{
    console.log("rest::getJSON");

    var port = options.port ;
    var req = port.request(options, function(res)
    {
        var output = '';
        console.log(options.host + ':' + res.statusCode);
        res.setEncoding('utf8');

        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            var obj = JSON.parse(output);
            onResult(res.statusCode, obj);
        });
    });

    req.on('error', function(err) {
        //res.send('error: ' + err.message);
    });

    req.end();
};

module.exports=router;