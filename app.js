var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// when we have to show dynamic parameters in template we need to install 'ejs'\
// package and have to set 'view engile' to 'ejs'.
app.set('view engine', 'ejs');

// any request which contains '/assets' will be served static files which
// resides in the directory express.static('directory_name') has mentioned
// in this case in the 'assets' directory...
app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/contact', function(req, res) {
  res.render('contact', {qs: req.query});
})

// this middleware will fire when a POST request will come to the route on which
// this middleware is defined...
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// this route will be executed when the contact form will be submitted...
app.post('/contact', urlencodedParser, function(req, res) {
  // passing the submitted data as an object in 'contact-success'...
  res.render('contact-success', {data: req.body});
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/404.html');
});

app.listen(3000);
