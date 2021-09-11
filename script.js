$(document).ready(function() {
    $('#about').hide();
});

// sections should fade in and out
$('#about-nav-btn').click(function() {
    $('#home').fadeOut();
    $('#about').fadeIn();
});

$('#projects-nav-btn').click(function() {
    $('#about').fadeOut();
    $('#home').fadeIn();
});