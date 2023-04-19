const headerNavList = document.querySelectorAll(".header-nav-list > li");
const footerNavList = document.querySelectorAll(".footer-nav-list > li");

headerNavList.forEach((element) => {
  element.addEventListener("click", () => {
    headerNavList.forEach((el) => el.classList.remove("highlighted"));
    element.classList.add("highlighted");
  });
});
footerNavList.forEach((element) => {
  element.addEventListener("click", () => {
    footerNavList.forEach((el) => el.classList.remove("highlighted"));
    element.classList.add("highlighted");
  });
});

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
let cardsCollection = document.querySelectorAll(".animal-card");
const cardsCollectionContainer = document.querySelector(".animal-cards");

function clearCards() {
  cardsCollection.forEach((card) => {
    card.remove();
  });
}

arrowLeft.addEventListener("click", (e) => {
  clearCards();
});
arrowRight.addEventListener("click", (e) => {
  clearCards();
});

function sliderFade() {}
function shuffle() {}
