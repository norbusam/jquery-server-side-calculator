console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    // event listeners
    $('#submitInputs').on('click', submitInputs);
    $('#clearInputs').on('click', clearInput);
    $('.operator').on('click', getOperator);
    // runs the getHistory on page load
    getHistory();
}// end of onReady

let operator = '';

// a function to clear the input fields on DOM
function clearInput() {
    $('#firstInput').val('');
    $('#secondInput').val('');
}//end of clearInput

// a GET route to grab the data from the server and to append to DOM
function getHistory() {
    console.log('Hello from History');
    $('#history').empty();
    // GET route
    $.ajax({
        method: 'GET',
        url: '/calculator'
    }).then(function(response){
        console.log('in GET client side', response);
        $('#history').empty();
        for (let result of response) {
            $('#history').append(`<li>${result.inputOne}
                                     ${result.operator}
                                     ${result.inputTwo} =
                                     ${result.answer}
                                     </li>
                `)
        }
        // appending just the answer to DOM
        let result = $('#resultOutput');
        result.empty();
        console.log(response[0].answer);
        result.append(`<p>${response[0].answer}</p>`);
    })
    
}// end of GetHistory

// grabs which operator is clicked on DOM to be send to server
function getOperator(){
    operator = $(this).text();
    // console.log('grabbing the operator',operator);
}//end of getOperator

//on submit button, a POST route to server and get the calculation done 
//and runs getHistory(that's the plan for now)
function submitInputs(){
    // console.log('submitted!!');
    // console.log(operator);
    if($('#firstInput').val() == '' || $('#secondInput').val() == ''){
        alert('Please enter numbers for calulation!')
        return false;
    }
    let numbers = {
        inputOne: $('#firstInput').val(),
        operator: operator,
        inputTwo: $('#secondInput').val(),
        answer: null
    }
    console.log(numbers);
    $.ajax({
        method: 'POST',
        url: '/calculator',
        data: numbers
    }).then(function(response){
        console.log('back from server:', response);
        getHistory();
    })
}// end of submitInputs