$(document).ready(function(){


//background image transition
 window.setInterval(function(){
  $('body').css('backgroundImage', 'url(img/people.jpg)');
  window.setTimeout(function(){
    $('body').css('backgroundImage', 'url(img/jungle.jpg),');
  }, 5000);
}, 7 * 1000);






















