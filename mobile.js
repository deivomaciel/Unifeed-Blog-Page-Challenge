function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "Assets/Hamburger Menu.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "Assets/close_menu.svg";
  }
}
