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
