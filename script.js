$(document).ready(function() {
    $('#about').hide();
});

// sections should fade in and out
$('#about-nav-btn').click(function() {
    $('#home').fadeOut();
    $('#about').fadeIn();
    $(this).addClass('active');
    $('#projects-nav-btn').removeClass('active');
});

$('#projects-nav-btn').click(function() {
    $('#about').fadeOut();
    $('#home').fadeIn();
    $(this).addClass('active');
    $('#about-nav-btn').removeClass('active');
});