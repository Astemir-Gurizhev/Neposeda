document.addEventListener("click", function (event) {
	if (event.target.closest(".header__burger")) {
	  document.querySelector(".header__menu").classList.toggle("header__menu-active");
	  document.querySelector(".header__burger").classList.toggle("active");
	  $("body").toggleClass("lock");
	}
	if (event.target.closest(".header__menu-link")) {
	  document.querySelector(".header__menu").classList.remove("header__menu-active");
	  document.querySelector(".header__burger").classList.remove("active");
	  document.querySelector("body").classList.remove("lock");
	}
 })