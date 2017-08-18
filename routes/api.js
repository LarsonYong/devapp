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
var app = express();
var bodyParser = require('body-parser');
var request = require('request');


// Get user list
router.get('/getUserlist',function(req,resp,next){
    User.find({},function (err,docs) {
        resp.send(docs);
        console.log("Get user list")
    })
});


// User verification
router.post('/users/authenticate',function (req,res,next) {
    var requestbody = req.body;
    var username = requestbody.username;
    var password = requestbody.password;
    User.find({"Username":username}, function (err,data) {
        if( password === data[0].Password){
            res.send(data);
            console.log("User verified")
        }else{
            res.status(401).json({message:'Username or Password is not correct'});
            console.log("Username or Password is not correct")
        }
    })
});


// Search user
router.get('/getUser/:name',function (req,res,next) {
    const username = req.params.name;
    User.find({"Username":username},function (err,data) {
        console.log(data);
        console.log(username);
        if (data.length > 0){
            res.json(data);
            console.log("User found");
            console.log(data)
        }else{
            res.json({"status":"404","message":'User is not found'});
            console.log("User not found")
        }
    })
});


// Add user
router.post('/user/add',function (req,res,next) {
   const username = req.body.username;
   const password = req.body.password;
   var user = new User({
       Username: username,
       Password: password
   });
   // mongoose.createConnection(db,function(error) {
   //     if (error){
   //         console.log(error)
   //     }else{
   //         console.log("Connected!")
   //     }
   // });
    User.count({"Username":username},function (err,data) {
        // console.log(data[0].Username);
        if(data > 0){
            res.json({"status":"406","message":"User name already exist"});
            console.log("User already exist");
        }else{
            user.save(function (err) {
                if(err){
                    res.send(err);
                    console.log(err)
                }else{
                    res.json({"status":"202","message":"Success!"});
                    console.log("User added")
                }
            });
        }
    });
});


// Update user
router.post('/user/update',function (req,res,next) {

});


// Delete user
router.post('/user/delete',function (req,res) {
    const username = req.body.username;
    // mongoose.createConnection(db,function (error) {
    //     if (error){
    //         console.log(error)
    //     }else{
    //         console.log("Connected!")
    //     }
    // });
    if (User.find({"Username":username})){
        User.find({"Username":username}).remove().exec();
        res.send("User removed");
        console.log("User removed")
    }else{
        res.send("User not Found");
        console.log("User not Found")
    }
});


// User register
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


// v5 login api
router.post('/v5login',function (req,res,next) {
    var username = req.body.username;
    var password = req.body.password;
    request.post(
        'http://10.70.32.60:4480/api/login', {
            form:{
                username:username,
                password:password
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

                console.log(body);
                res.send(body)
            }
            console.log("req.body   ");
            console.log(req.body.username);
            console.log(req.body.password)
        }
    );
});


// Get all connected units
router.get('/v5allconnect',function (req,res,next) {
    request.get(
        'http://10.70.32.60:4480/api/units/getAllConnectedUnits',
        function (error, response, body) {
            if (!error && response.statusCode == 200) {

                console.log(body);
                res.send(body)
            }
            console.log("req.body   ");
        }
    );
});


// exports.getJSON = function(options, onResult)
// {
//     console.log("rest::getJSON");
//
//     var port = options.port ;
//     var req = port.request(options, function(res)
//     {
//         var output = '';
//         console.log(options.host + ':' + res.statusCode);
//         res.setEncoding('utf8');
//
//         res.on('data', function (chunk) {
//             output += chunk;
//         });
//
//         res.on('end', function() {
//             var obj = JSON.parse(output);
//             onResult(res.statusCode, obj);
//         });
//     });
//
//     req.on('error', function(err) {
//         //res.send('error: ' + err.message);
//     });
//
//     req.end();
// };

module.exports=router;