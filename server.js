/**
 * Created by jack on 8/1/17.
 */
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//The "bodyParser" middleware is used to get the data from request body
// like POST, PUT and DELETE type request.


var index = require('./routes/index');
var api = require('./routes/api');

var port = 4500;
var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'client/views'));

// Register given template engine callback function as extension
app.engine('html', require('ejs').renderFile);

// Define the path of the static files like images, css and ks files
app.use(express.static(path.join(__dirname,'./client')));

// Define the middleware to parse the data from URL request and requesy body
// The "urlEncoded" middle-ware is used to get the data from URL of the request.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
cors = require('./routes/cors.js');
app.use(cors());
app.use('/',index);
app.use('/api/*',api);
app.use('/api',api);

app.use('*',index);

app.listen(port,function () {
    console.log('Server Started AT ' + port);
});
