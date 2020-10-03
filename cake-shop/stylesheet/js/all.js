$(function(){
    $('.menu-trigger').on('click', function() {
      $(this).toggleClass('active');
      $('body').toggleClass('menu-open');
    });
  });

  
  