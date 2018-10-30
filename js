(function($) {
  $("#toggle").click(function() {
    $("#user_interface").toggleClass("open_menu");
  });
})(jQuery);

$('.container').vegas({
  overlay: true,
  transition: [ 'fade', 'swirlLeft2' ],
  transitionDuration: 3000,
  delay: 5000,
  animation: 'random',
  animationRegister:['pulse'],
  animationDuration: 10000,
  slides: [
    { src: '/img/7.jpg' },
    { src: '/img/8.jpg' },
    { src: '/img/9.jpg' },
    { src: '/img/20.jpg' }
  ]
});

// $('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
//   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//     var target = $(this.hash);
//     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//     if (target.length) {
//       $('html,body').animate({
//         scrollTop: target.offset().top
//       }, 1000);
//       return false;
//     }
//   }
// });
