header_block_run();
function header_block_run() {
  // header menu for mobile sizes
  $(".burger-ico").click(function () {
    $(".burger-ico,.list-links").toggleClass("active");
    $("body").toggleClass("lock");
  });
}
