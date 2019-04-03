var express = require('express');
var server = express();
var options = {
  index: 'index.html'
};
server.use('/', express.static('/home/site/wwwroot/frontend/src', options));
server.listen(process.env.PORT);