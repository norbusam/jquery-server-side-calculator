console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    $('#submitInputs').on('click', submitInputs)
    $('#clearInputs').on('click', clear)
}// end of onReady

function clear() {
    $('#firstInput').val('');
    $('#secondInput').val('');
}//end of clear

function submitInputs(){
    console.log('submitted!!');
    let operator = $('#plus').val();
    console.log(operator);
    let numbers = {
        inputOne: $('#firstInput').val(),
        operator: '',
        inputTwo: $('#secondInput').val(),
    }
    console.log(numbers);
}// end of submitInputs