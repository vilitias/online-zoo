const headerNavList = document.querySelectorAll(".header-nav-list > li")
const footerNavList = document.querySelectorAll(".footer-nav-list > li")


headerNavList.forEach(element => {
    element.addEventListener("click", () => {
        headerNavList.forEach(el => el.classList.remove("highlighted"));
        element.classList.add("highlighted");
    })
});
footerNavList.forEach(element => {
    element.addEventListener("click", () => {
        footerNavList.forEach(el => el.classList.remove("highlighted"));
        element.classList.add("highlighted");
    })
});