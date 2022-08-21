express = require('express');
var moment = require('moment');

app = express();
const format = "YYYY-MM-DD";

var date = moment(new Date()).format(format);
require('http').Server((req, res) => {
    if (req.url == '/163077') {
      
      res.writeHead(200, { 'Content-Type': 'application/json', 'exam': 'Web' });
      return res.end(JSON.stringify({"date": date}));
    }
    res.end('NULL');
  })
  .listen(process.env.PORT || 5000);
