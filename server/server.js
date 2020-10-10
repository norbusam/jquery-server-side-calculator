// Require to pass in express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
// app is declared to use express
const app = express();
// the port where the project is at
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended:true}));


app.listen(port, ()=>{
    console.log('Server up and running at:', port);
})