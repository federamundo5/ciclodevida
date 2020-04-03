const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname + '/angularapp'));
app.listen(process.env.PORT || 8080);
app.get('*', function (req, res) {
    const index = path.join(__dirname, 'index.html');
    res.sendFile(index);
  });
console.log('Finalizo!!');