console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    $('#submitInputs').on('click', submitInputs);
    $('#clearInputs').on('click', clearInput);
    $('.operator').on('click', getOperator);
}// end of onReady

let operator = '';

function clearInput() {
    $('#firstInput').val('');
    $('#secondInput').val('');
}//end of clearInput

function getHistory() {
    
}// end of GetHistory

function getOperator(){
    operator = $(this).text();
    console.log('grabbing the operator',operator);
}

function submitInputs(){
    console.log('submitted!!');
    console.log(operator);
    let numbers = {
        inputOne: $('#firstInput').val(),
        operator: operator,
        inputTwo: $('#secondInput').val(),
    }
    console.log(numbers);
}// end of submitInputs