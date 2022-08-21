require('http').Server((req, res) => {
    if (req.url == '/163077') {
      res.writeHead(200, { 'Content-Type': 'application/json', 'exam': 'Web' });
      return res.end(JSON.stringify({"date": "2022-08-21"}));
    }
    res.end('NULL');
  })
  .listen(8000);
