const navigation = document.getElementById("navigation");
const nav = document.getElementById("nav");
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  navigation.style.display = "flex";
  nav.style.position = "fixed";
  nav.style.width = "100%";
  hamburger.style.display = "none";
  closeBtn.style.display = "inline-flex";

})

closeBtn.addEventListener("click", () => {
  navigation.style.display = "none";
  nav.classList.remove = "open";
  nav.style.position = "relative";
  hamburger.style.display = "inline-flex";
  closeBtn.style.display = "none";
})