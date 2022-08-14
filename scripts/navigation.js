var prevScrollpos = window.pageYOffset;
var navigation = document.querySelector("header");
if (navigation) {
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navigation.style.top = "0";
      } else {
        navigation.style.top = "-90px";
      }
      prevScrollpos = currentScrollPos;
      if (currentScrollPos > 1) {
        navigation.style.position = "fixed";
      }
      if (currentScrollPos < 1) {
        navigation.style.position = "absolute";
      }
    };
}