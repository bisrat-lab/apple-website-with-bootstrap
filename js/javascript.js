if ($(window).width() <= 768){	
      $('.footer-links-container').addClass("someClass");
}else{
      $('.footer-links-container').removeClass("someClass");
}
$(window).on('resize', function(event){
      if ($(window).width() <= 768){	
            $('.footer-links-container').addClass("someClass");
      }else{
            $('.footer-links-container').removeClass("someClass");
            $('.footer-links-container ul').show();
      }	
});

// Footer collapse functionality 
$(document).on("click", ".someClass h3", function(){
      $(this).next('ul').slideToggle();
      $(this).toggleClass("expanded");
});

