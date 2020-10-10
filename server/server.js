// Require to pass in express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
// const calculation = require('./modules/calculation')
// app is declared to use express
const app = express();
// the port where the project is at
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended:true}));

let numberArray = [];

// GET route
app.get('/calculator', (req, res)=>{
    res.send(numberArray);
})

// POST route
app.post('/calculator', (req, res)=>{
    console.log('in POST server', req.body);
    numberArray.unshift(req.body);
    calculation();
    console.log('object to be calculated:',numberArray);
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log('Server up and running at:', port);
})

function calculation(){
    if(numberArray[0].operator === '+'){
        numberArray[0].answer = Number(numberArray[0].inputOne) + Number(numberArray[0].inputTwo);
    } else if (numberArray[0].operator === '-'){
        numberArray[0].answer = Number(numberArray[0].inputOne) - Number(numberArray[0].inputTwo);
    } else if (numberArray[0].operator === '*'){
        numberArray[0].answer = Number(numberArray[0].inputOne) * Number(numberArray[0].inputTwo);
    } else if (numberArray[0].operator === '/'){
        numberArray[0].answer = Number(numberArray[0].inputOne) / Number(numberArray[0].inputTwo);
    }
} // end of calculation

// function calculation(){
//     let firstNum = numberArray[0].inputOne;
//     let secondNum = numberArray[0].inputTwo;
//     let operator = numberArray[0].operator;
//     switch (operator) {
//         case '+':
//             return firstNum + secondNum
//             break;
//         case '-':
//             return firstNum - secondNum
//             break;
//         default:
//             break;
//     }
// }