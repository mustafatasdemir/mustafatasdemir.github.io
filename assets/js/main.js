jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });



    $(".to-project").on('click', function(event) {

     if (this.hash !== "") {
       event.preventDefault();

       var hash = this.hash;

       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 300, function(){
         window.location.hash = hash;
       });
       this.blur();
     } // End if
   });


});
