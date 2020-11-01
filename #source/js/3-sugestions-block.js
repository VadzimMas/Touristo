sugestions_block_run();
function sugestions_block_run() {
  document
    .getElementsByClassName("email-btn")[0]
    .addEventListener("click", function () {
      document.getElementsByClassName("sms")[0].style.display = "none";
      document.getElementsByClassName("email")[0].style.display = "block";
      document.getElementsByClassName("email-btn")[0].style.borderBottom =
        "none";
      document.getElementsByClassName("sms-btn")[0].style.borderBottom =
        "1px dashed #ffffff";
    });

  document
    .getElementsByClassName("sms-btn")[0]
    .addEventListener("click", function () {
      document.getElementsByClassName("sms")[0].style.display = "block";
      document.getElementsByClassName("email")[0].style.display = "none";
      document.getElementsByClassName("sms-btn")[0].style.borderBottom = "none";
      document.getElementsByClassName("email-btn")[0].style.borderBottom =
        "1px dashed #ffffff";
    });
}
