const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);

window.addEventListener("scroll", () => {
    const navbarHeight = navbarEl.offsetHeight;
    const bottomContainerOffsetTop = bottomContainerEl.offsetTop;

    if (window.scrollY > bottomContainerOffsetTop - navbarHeight - 50){
        navbarEl.classList.add("active");
    }  else {
        navbarEl.classList.remove("active");
    }
});
