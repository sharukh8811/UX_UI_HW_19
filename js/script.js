
$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '1000px'});
  });
});


$(document).ready(function() {
    $('.quote-section').hover(function() {
        $('.pinwheel').addClass('spin');
    }, function() {
        $('.pinwheel').removeClass('spin');
    });
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        let scrollTop = $(this).scrollTop();
        let triggerPoint = 100; // Adjust this value to decide when the bird starts flying

        if (scrollTop > triggerPoint) {
            $('.bird').addClass('fly-across');
        } else {
            $('.bird').removeClass('fly-across');
        }
    });
});

$(document).ready(function() {
    $('#myButton').on('click', function() {
        console.log("Button was clicked!");
        // Add your UI interaction here
        $(this).text("You clicked me!"); // Example of a simple UI change
    });
});
$(document).ready(function() {
    $(window).on('scroll', function() {
        console.log("User scrolled!");
        $('#myDiv').css('opacity', 0.5); // Example UI interaction: change opacity
    });
});
