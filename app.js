import express from 'express';

// Constants
var PORT = 8080;
var HOST = '0.0.0.0';

// App
var app = express();
app.get('/', (req, res) => {
  res.send('Hello World, this is express framework.');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);