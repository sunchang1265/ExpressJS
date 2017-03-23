var express = require('express');
var app = express();

var port = 3001;
app.get('/', function(req, res){
    res.send('Hello World!');
});

app.listen(port, function(){
    console.log('Eample app listening on port ' + port + '!');
});