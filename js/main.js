
header_block_run();
function header_block_run() {
  // header menu for mobile sizes
  $(".burger-ico").click(function () {
    $(".burger-ico,.list-links").toggleClass("active");
    $("body").toggleClass("lock");
  });
}

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

spetial_block_run();
function spetial_block_run() {
  let spetialBlock = document.getElementsByClassName("spetial-block");
  let spetial = document.getElementsByClassName("spetial");
  let spetial__row = document.getElementsByClassName("spetial__row");
  let cards = spetialBlock[0].getElementsByClassName("card");
  let is_window_big;
  let ul = document.createElement("Ul");

  first_run();
  window.addEventListener("resize", first_run);

  function first_run() {
    create_dots();
    if (check_window_size() <= 1024) {
      for_Small_Window();
    } else {
      for_Big_Window();
    }
  }

  function check_window_size() {
    return window.innerWidth;
  }

  function for_Small_Window() {
    card_null_stile();
    first_start(false);
    set_first_dot_white();
    is_window_big = false;
  }

  function for_Big_Window() {
    card_null_stile();
    first_start(true);
    set_first_dot_white();
    is_window_big = true;
    if (cards.length <= 2) {
      ul.style.display = "none";
    } else {
      let li = ul.getElementsByTagName("li");
      li[li.length - 1].style.display = "none";
    }
  }

  function left_card(i) {
    cards[i].style.display = "block";
    cards[i].style.position = "absolute";
    cards[i].style.left = "-335px";
    cards[i].style.top = "0";
    cards[i].style.width = "320px";
    cards[i].style.height = "100%";
  }

  function middle_card(i, is_window_big, card_count) {
    if (is_window_big) {
      if (card_count == 1) {
        spetial__row[0].style.display = "flex";
        cards[i].style.display = "block";
        cards[i].style.position = "relative";
        cards[i].style.left = "auto";
        cards[i].style.top = "auto";
        cards[i].style.right = "auto";
        cards[i].style.width = "50%";
        cards[i].style.height = "100%";
        cards[i].style.margin = "0 15px 0 0";
      } else if (card_count == 2) {
        spetial__row[0].style.display = "flex";
        cards[i].style.display = "block";
        cards[i].style.position = "relative";
        cards[i].style.left = "auto";
        cards[i].style.top = "auto";
        cards[i].style.right = "auto";
        cards[i].style.width = "50%";
        cards[i].style.height = "100%";
        cards[i].style.margin = "0 15px 0 0";

        cards[i + 1].style.display = "block";
        cards[i + 1].style.position = "relative";
        cards[i + 1].style.left = "auto";
        cards[i + 1].style.top = "auto";
        cards[i + 1].style.right = "auto";
        cards[i + 1].style.width = "50%";
        cards[i + 1].style.height = "100%";
        cards[i + 1].style.margin = "0 0 0 15px";
      }
    } else {
      cards[i].style.display = "block";
      cards[i].style.position = "static";
      cards[i].style.left = "auto";
      cards[i].style.top = "auto";
      cards[i].style.right = "auto";
      cards[i].style.width = "100%";
      cards[i].style.height = "100%";
    }
  }

  function right_card(i) {
    cards[i].style.display = "block";
    cards[i].style.position = "absolute";
    cards[i].style.right = "-335px";
    cards[i].style.top = "0";
    cards[i].style.width = "320px";
    cards[i].style.height = "100%";
  }

  function first_start(is_window_big) {
    if (is_window_big) {
      if (cards.length == 0) {
        spetialBlock[0].style.display = "none";
      } else if (cards.length == 1) {
        middle_card(0, true, 1);
      } else if (cards.length == 2) {
        middle_card(0, true, 2);
      } else if (cards.length > 2) {
        middle_card(0, true, 2);
        right_card(2);
      }
    } else {
      if (cards.length == 0) {
        spetialBlock[0].style.display = "none";
      } else if (cards.length == 1) {
        middle_card(0);
      } else if (cards.length > 1) {
        middle_card(0);
        right_card(1);
      }
    }
  }

  function create_dots() {
    ul.remove();
    ul = document.createElement("Ul");
    ul.style.display = "flex";

    if (cards.length > 1) {
      ul.setAttribute("id", "dots");
      for (i = 0; i < cards.length; i++) {
        let li = document.createElement("LI");
        li.setAttribute("id", i);
        ul.appendChild(li);
        li.addEventListener("click", card_click);
        cards[i].setAttribute("id", i);
        cards[i].addEventListener("click", card_click);
      }
      document.getElementsByClassName("spetial")[0].appendChild(ul);
    }
  }

  function card_null_stile() {
    for (let index = 0; index < cards.length; index++) {
      cards[index].style.display = "none";
      cards[index].style.position = "static";
      cards[index].style.left = "auto";
      cards[index].style.top = "auto";
      cards[index].style.right = "auto";
      cards[index].style.width = "100%";
      cards[index].style.height = "100%";
      cards[index].style.margin = "0 0 0 0";
    }
  }

  function card_click() {
    let all_li = spetial[0].getElementsByTagName("li");
    let i = Number(this.id);

    //sets decoration for dots
    if (all_li[i].style.backgroundColor != "white") {
      for (let index = 0; index < all_li.length; index++) {
        all_li[index].style.backgroundColor = "#22c3ca";
      }
      all_li[i].style.backgroundColor = "white";
      all_li[i].style.border = "1px solid #22c3ca";
    }

    if (!is_window_big) {
      if (i == 0) {
        card_null_stile();
        middle_card(i);
        right_card(i + 1);
      } else if ((i > 0) & (i < cards.length - 1)) {
        card_null_stile();
        left_card(i - 1);
        middle_card(i);
        right_card(i + 1);
      } else if ((i > 0) & (i == cards.length - 1)) {
        card_null_stile();
        left_card(i - 1);
        middle_card(i);
      }
    }

    if (is_window_big) {
      if (i == 0) {
        card_null_stile();
        middle_card(i, true, 2);
        right_card(i + 2);
      } else if (i == cards.length - 1) {
        card_null_stile();
        left_card(i - 2);
        middle_card(i - 1, true, 2);
      } else {
        card_null_stile();
        left_card(i - 1);
        middle_card(i, true, 2);
        if (cards.length - 1 >= i + 2) {
          right_card(i + 2);
        }
      }
    }
  }

  function set_first_dot_white() {
    let all_li = spetial[0].getElementsByTagName("li");
    for (let index = 0; index < all_li.length; index++) {
      all_li[index].style.backgroundColor = "#22c3ca";
    }
    all_li[0].style.backgroundColor = "white";
    all_li[0].style.border = "1px solid #22c3ca";
  }
}

reviews_block_run();
function reviews_block_run() {
  let reviews_block = document.getElementsByClassName("reviews-block");
  let reviews = reviews_block[0].getElementsByClassName("reviews");
  let reviews_row = reviews[0].getElementsByClassName("reviews__row");
  let reviews_cards = reviews_row[0].getElementsByClassName("card");
  let reviews_ul;

  reviews_first_stert();

  window.addEventListener("resize", () => {
    reviews_cleane_dots();
    reviews_first_stert();
  });

  function reviews_create_dots() {
    if (reviews_cards.length > 1) {
      reviews_ul = document.createElement("UL");
      reviews_ul.setAttribute("id", "reviews_dots");
      for (i = 0; i < reviews_cards.length; i++) {
        let li = document.createElement("LI");
        li.setAttribute("id", i);
        li.addEventListener("click", reviews_card_click);
        reviews_ul.appendChild(li);
        reviews_cards[i].setAttribute("id", i);
      }
      reviews[0].appendChild(reviews_ul);
      reviews_li = reviews_ul.getElementsByTagName("li");
    }
  }

  function reviews_cleane_dots() {
    reviews_ul.style.display = "none";
  }

  function reviews_max768(i) {
    reviews_clear_cards();
    reviews_cards[i].style.display = "block";
  }

  function reviews_max1024(i) {
    if (i + 1 <= reviews_cards.length - 1) {
      reviews_clear_cards();
      reviews_cards[i].style.display = "block";
      reviews_cards[i + 1].style.display = "block";
      if (reviews_cards.length == 2) {
        reviews_ul.style.display = "none";
      } else {
        let reviews_li_length = reviews_li.length;
        reviews_li[reviews_li_length - 1].style.display = "none";
      }
    }
  }

  function reviews_min1024(i) {
    if (i + 2 <= reviews_cards.length - 1) {
      reviews_clear_cards();
      reviews_cards[i].style.display = "block";
      reviews_cards[i + 1].style.display = "block";
      reviews_cards[i + 2].style.display = "block";
      if (reviews_cards.length == 3) {
        reviews_ul.style.display = "none";
      } else {
        let reviews_li_length = reviews_li.length;
        reviews_li[reviews_li_length - 1].style.display = "none";
        reviews_li[reviews_li_length - 2].style.display = "none";
      }
    }
  }

  function reviews_check_window(i) {
    if (window.innerWidth <= 768) {
      reviews_max768(i);
    } else if ((window.innerWidth > 768) & (window.innerWidth <= 1024)) {
      reviews_max1024(i);
    } else {
      reviews_min1024(i);
    }
  }

  function reviews_starting_dot() {
    if (reviews_cards.length >= 2) {
      let all_li = reviews_ul.getElementsByTagName("li");
      for (let index = 0; index < all_li.length; index++) {
        all_li[index].style.backgroundColor = "#22c3ca";
      }
      all_li[0].style.backgroundColor = "white";
      all_li[0].style.border = "1px solid #22c3ca";
    }
  }

  function reviews_card_click() {
    let all_li = reviews_ul.getElementsByTagName("li");
    let i = Number(this.id);

    //sets decoration for dots
    if (all_li[i].style.backgroundColor != "white") {
      for (let index = 0; index < all_li.length; index++) {
        all_li[index].style.backgroundColor = "#22c3ca";
      }
      all_li[i].style.backgroundColor = "white";
      all_li[i].style.border = "1px solid #22c3ca";
    }

    reviews_check_window(i);
  }

  function reviews_clear_cards() {
    for (let index = 0; index < reviews_cards.length; index++) {
      const element = reviews_cards[index];
      element.style.display = "none";
    }
  }

  function reviews_first_stert() {
    reviews_create_dots();
    reviews_check_window(0);
    reviews_starting_dot();
  }
}
