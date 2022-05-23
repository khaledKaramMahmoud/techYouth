// navbar
var navbar = document.getElementById('Navbar');
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
      navbar.classList.add("fixed");
  } else {
      navbar.classList.remove("fixed");
  }
});
  // owl member
  $(".team_center").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });