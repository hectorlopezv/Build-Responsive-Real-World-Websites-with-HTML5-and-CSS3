$(document).ready(function () {
    var waypoints = $('.jssection-features').waypoint(function(direction) {
        console.log(direction);
        if (direction == "down")
        {
            $('header nav').addClass('sticky');
        }else
        {
            $('header nav').removeClass('sticky');  
             
        }
    },{offset: '-10%'});


    $('.jsscroll-to-plans').click(function(){

        $('html, body').animate({
            scrollTop: $('.jssection-plans').offset().top
        }, 1000);
    });

    
    $('.jscroll-to-start').click(function(){

        $('html, body').animate({
            scrollTop: $('.jssection-features').offset().top
        }, 1000);
    });


 $('a[href*="#"]')
  // Remove links that don't actually link to anything
 .not('[href="#"]')
 .not('[href="#0"]')
 .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }

    }
  });

  var waypoints = $('.jswp-1').waypoint(function(_direction) {

      $('.jswp-1').addClass('animate__animated animate__fadeIn')
  },{offset:'50%'});

  var waypoints = $('.jswp-2').waypoint(function(_direction) {

      $('.jswp-2').addClass('animate__animated animate__slideInUp')
  },{offset:'50%'});


  var waypoints = $('.jswp-3').waypoint(function(_direction) {

      $('.jswp-3').addClass('animate__animated animate__fadeIn')
  },{offset:'50%'});

  var waypoints = $('.jswp-4').waypoint(function(_direction) {

      $('.jswp-4').addClass('animate__animated animate__pulse')
  },{offset:'50%'});

 

  $('#jsnavicon').click(function() {
    
    const var_ = $('.jsmain-nav');
    const icon_ = $('#jsnavicon');
    var_.slideToggle();

    if (icon_.attr("name") === "list-outline"){
        icon_.attr("name", "close-outline");
    }
    else{
        icon_.attr("name", "list-outline");
    }
  });

  
  
 






});