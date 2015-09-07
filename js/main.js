/*
$(document).ready(function(){
    
});
*/

function resetForm() {
    $('input.email').removeClass('thank-you-text');
    $('input.email').prop('placeholder', 'Enter your email address');
}

function changeButton() {
    $('input.email').prop('value', '');
    $('input.email').addClass('thank-you-text');
    $('input.email').prop('placeholder', 'Thank you!');
    setTimeout(resetForm, 1500);
}

