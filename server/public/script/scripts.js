console.log('JS loaded');

$(document).ready(onReady);

function onReady() {
    console.log('JQ loaded');
    $('#submitInputs').on('click', submitInputs)
}// end of onReady

function submitInputs(){
    console.log('submitted!!');
}