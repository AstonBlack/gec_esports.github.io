function switchImg() {
    document.querySelector(`.lab-100`).classList.toggle("active");
    document.querySelector(`.lab-100`).classList.toggle("inactive");
    document.querySelector(`.lab-200`).classList.toggle("active");
    document.querySelector(`.lab-200`).classList.toggle("inactive");
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".lds-ripple").style.opacity = 0;
        document.querySelector(".loaderText").innerHTML = "No competitions found. "
        document.querySelector(".loaderText").classList.add('active');
    }, 1800)
})