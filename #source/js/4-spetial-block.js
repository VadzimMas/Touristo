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
