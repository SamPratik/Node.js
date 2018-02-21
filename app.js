var express = require('express');

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

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/404.html');
});

app.listen(3000);
