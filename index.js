var moment = require('moment');

const format = "YYYY-MM-DD";

var date = moment(new Date()).format(format);
require('http').Server((req, res) => {
    if (req.url == '/163077') {
      res.writeHead(200, { 'Content-Type': 'application/json', 'exam': 'Web' });
      return res.end(JSON.stringify({"date": date}));
    }
    res.writeHead(404, {"Content-Type":'application/json', 'exam': 'Web'});
    res.end();
  })
  .listen(process.env.PORT || 5000);
