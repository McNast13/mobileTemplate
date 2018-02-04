var express = require('express','Bootsrap');
var app = express();

app.set('view engine', 'ejs');
//opens the index page on load
app.get('/', function(req, res) {
    res.render('pages/index');
});
//setting up the links
app.get('/index', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('pages/index')
})

app.listen(8080);
console.log('8080 is the magic port');
