/*
$(document).ready(function(){
    
});
*/

function changeButton() {
    $('input.submit').prop('value', ' ');
    $('input.email').prop('value', '');
    $('input.email').prop('placeholder', 'Thank you!');
    $('.submit-wrapper span').css({'display':'inline'});
    setTimeout(resetForm, 2000);
}

function resetForm () {
    $('.submit-wrapper span').css({'display':'none'});
    $('input.email').prop('placeholder', 'Enter your email address');
    $('input.submit').prop('value', 'Submit');
    $('input.submit').addClass('fade-in-button');
}