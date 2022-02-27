let Header = document.querySelector(".header")
let FooterButton = document.querySelector("button.up");
let HeaderLinks = document.querySelector(".header ul");
let HeaderBurger = document.querySelector(".header .bar")


window.onscroll = function () {
    if (window.scrollY >= 800) {
        FooterButton.style.opacity = "1"
        Header.classList.add("fixed")
    } else {
        FooterButton.style.opacity = "0"
        Header.classList.remove("fixed")
    }
}
FooterButton.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}

HeaderBurger.addEventListener("click" , function () {
    HeaderLinks.classList.toggle("active")
})

