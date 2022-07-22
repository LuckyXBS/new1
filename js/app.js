const hamburger_menu = document.querySelector(".hamburg-menu svg");
const navbar = document.querySelector(".burger-container");
const menu_name = document.querySelector(".menu-list-content-name");
const menu_name1 = document.querySelector(".about");
const menu_name2 = document.querySelector(".garant");
const menu_name3 = document.querySelector(".contact-block");
const close_hamburger_menu = document.querySelector(".hamburg-close-btn svg");

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

close_hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  else {
    closeMenu();
  }
});

menu_name.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  else {
    closeMenu();
  }
});

menu_name1.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  else {
    closeMenu();
  }
});

menu_name2.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  else {
    closeMenu();
  }
});

menu_name3.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  else {
    closeMenu();
  }
});

document.querySelector('.home-button').onclick = function() {
  window.location.href = 'tel:+7(918)-153-99-26';
};

document.querySelector('.button-call').onclick = function() {
  window.location.href = 'tel:+7(918)-153-99-26';
};

document.querySelector('.callings-block').onclick = function() {
  window.location.href = 'tel:+7(918)-153-99-26';
};