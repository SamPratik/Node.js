var express = require('express');

var app = express();
// when we have to show dynamic parameters in template we need to install 'ejs'\
// package and have to set 'view engile' to 'ejs'.
app.set('view engine', 'ejs');

app.get('/home', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/contact.html');
});

// sending URL parameter name and fetching data from database using 'name'. then
// sending those datas in 'profile.ejs' which must be in 'views' folder...
app.get('/profile/:name', function(req, res) {
  // fetching datas from database using 'name'...
  var data = {age: 0.1, job: 'Kannakati'};
  // sending those datas using 'render()' in 'views/profile.ejs'...
  res.render('profile', {name: req.params.name, data: data});
});

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/404.html');
});
app.listen(3000);
