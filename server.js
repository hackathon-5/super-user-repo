var express = require('express'),
  app = express();

app.use(express.static(__dirname + '/public'));

app.get('/machines', function(req, res) {
  res.json({
    '0': {
      name: "Vending Machine 0",
      products: {
        
      }
    }
  });
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);
