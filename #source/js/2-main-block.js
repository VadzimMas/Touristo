main_block_run();
function main_block_run() {
  // sets class and start position bosy temporary locks
  $(".main__menu").click(function () {
    if ($(window).width() <= 1300) {
      $(".burger-ico2 , .inner , .main__menu").toggleClass("active");
      $("body").toggleClass("lock");
      $(window).scrollTop($(".main__menu").offset().top - 20);
    }
  });
  // if window resised reset function
  $(window).resize(function () {
    if ($("body").hasClass("lock")) {
      $("body").toggleClass("lock");
      $(".burger-ico2 , .inner , .main__menu").toggleClass("active");
    }
  });
  // sets start row and change rows by clicking
  $(".main__praducts").css("display", "none");
  $("#tab-1").css("display", "flex");
  $(".inner a").click(function () {
    $(".main__praducts").css("display", "none");
    var href = $(this).attr("href");
    $(href).css("display", "flex");
    if ($(window).width() <= 1300) {
      var name = $(this).html();
      $(".row").html(name);
    }
  });
}
