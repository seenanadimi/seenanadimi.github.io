function hideShowText() {
  $(".img_text").hide();
  $(".img_carousel").hover(
    function () {
      $(".img_carousel").hide();
      $(".img_text").show();
    },
    function () {
      $(".img_text").hide();
      $(".img_carousel").show();
    }
  );
}

function hideShowText_1() {
  $(".img_text_1").hide();
  $(".img_carousel_1").hover(
    function () {
      $(".img_carousel_1").hide();
      $(".img_text_1").show();
    },
    function () {
      $(".img_text_1").hide();
      $(".img_carousel_1").show();
    }
  );
}

function hideShowText_2() {
  $(".img_text_2").hide();
  $(".img_carousel_2").hover(
    function () {
      $(".img_carousel_2").hide();
      $(".img_text_2").show();
    },
    function () {
      $(".img_text_2").hide();
      $(".img_carousel_2").show();
    }
  );
}

function hideShowText_3() {
  $(".img_text_3").hide();
  $(".img_carousel_3").hover(
    function () {
      $(".img_carousel_3").hide();
      $(".img_text_3").show();
    },
    function () {
      $(".img_text_3").hide();
      $(".img_carousel_3").show();
    }
  );
}

$(".carousel").carousel({
  interval: 10000,
});

$(document).ready(function () {
  hideShowText();
  hideShowText_1();
  hideShowText_2();
  hideShowText_3();
  carousel();
});
