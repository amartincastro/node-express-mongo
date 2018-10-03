const express = require('express');
const app = express();
const port = 3000;
app.listen(port, function(){
  console.log('Node Express and Mongo App');
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});
