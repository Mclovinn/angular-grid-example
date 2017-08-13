'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var app = express();

const port = 3000;

app.listen(port);
app.use(serveStatic('app/', {'index': ['index.html', 'index.htm']}));
console.log('App listening on port 3000');
