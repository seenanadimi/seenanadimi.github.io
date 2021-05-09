$(document).ready(function () {
  //change the integers below to match the height of your upper div, which I called
  //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
  //to figure out what the scroll position is when exactly you want to fix the nav
  //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
  //you know the position.
  $(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 1200) {
      $("#nav_bar").addClass("navbar-fixed-top");
    }

    if ($(window).scrollTop() < 1200) {
      $("#nav_bar").removeClass("navbar-fixed-top");
    }
  });
});



$(".carousel").carousel({
  interval: 1000,
});