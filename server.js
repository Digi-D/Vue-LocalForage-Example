var express = require('express');
var app = express();

app.use(express.static('public'));

var appPort = process.env.PORT || '3333';

app.listen(appPort, function () {
    console.log("Magic on port %d", appPort);
});
