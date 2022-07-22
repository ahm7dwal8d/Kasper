// Box Model Section 

let settingBox = document.querySelector(".setting-box")
let settingIcon = document.querySelector(".setting-box .icon")

settingIcon.addEventListener("click", function () {
    settingBox.classList.toggle("active")
    this.classList.toggle("active")
})

let colorEl = document.querySelectorAll(".setting-box .color li")

let mainColor = localStorage.getItem("color-option")

if (mainColor !== null) {
    colorEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.color === mainColor) {
            el.classList.add("active")
            document.documentElement.style.setProperty("--main-color", mainColor)
        }
    })
}

colorEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        colorEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
        localStorage.setItem("color-option", e.target.dataset.color)
    })
})

let randomStatus;
let sliderInterval;
let randomEl = document.querySelectorAll(".setting-box .random li")

let mainSlider = localStorage.getItem("random-option")

if (mainSlider !== null) {
    randomEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.slider === mainSlider) {
            el.classList.add("active")
        }
    })
    if (mainSlider === "true") {
        randomStatus = true;    
    } else {
        randomStatus = false
    }
}

randomEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        randomEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        randomStatus = e.target.dataset.slider 
        if (e.target.dataset.slider === "true") {
            randomStatus = true;
            randomSlider()
        localStorage.setItem("random-option", true)
        } else {
            randomStatus = false;
            clearInterval(sliderInterval)
            localStorage.setItem("random-option", false)
        }
    })
})


function randomSlider () {
    if (randomStatus === true) {
        sliderInterval = setInterval(() => {
            sliderWrap.append(slider[0])
        }, 1000)
    }
}
randomSlider()

let themeEl = document.querySelectorAll(".setting-box .theme li")

let mainBackground = localStorage.getItem("theme-option")

if (mainBackground !== null) {
    themeEl.forEach((el) => {
        el.classList.remove("active")
        if (el.dataset.theme === mainBackground) {
            el.classList.add("active")
        }
        document.body.style.backgroundColor = mainBackground
    })
}

themeEl.forEach((el) => {
    el.addEventListener("click", function (e) {
        themeEl.forEach((el) => {
            el.classList.remove("active")
            this.classList.add("active")
        })
        document.body.style.backgroundColor = e.target.dataset.theme
        localStorage.setItem("theme-option", e.target.dataset.theme)
    })
})

let resetButton = document.querySelector(".setting-box button")

resetButton.addEventListener("click", function () {
    localStorage.removeItem("color-option")
    localStorage.removeItem("random-option")
    localStorage.removeItem("theme-option")
    window.location.reload()
})
// Header Section
let headerUl = document.querySelector(".header ul")
let burgerIcon = document.querySelector(".header .bar")

burgerIcon.addEventListener("click", function () {
    let overly = document.createElement("div")
    overly.className = "header-overly"
    document.body.appendChild(overly)
    overly.appendChild(headerUl)
    let closeButton = document.createElement("span")
    closeButton.className = "close-button"
    let closeButtonText = document.createTextNode("X")
    closeButton.appendChild(closeButtonText)
    overly.appendChild(closeButton)
    document.addEventListener("click", function (e) {
        if (e.target.className === "close-button" || e.target.className === "header-overly") {
            overly.remove()
        }
    })
})

$(".header ul li a").click(function (event) {

    event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    $("html , body").animate({

        scrollTop: $("#" + $(this).data("scroll")).offset().top

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1000) {

        $(".header").addClass("active")

    } else {

        $(".header").removeClass("active")

    }

})

// Landing Section 



let sliderWrap = document.querySelector(".landing .slider-wrap")

let slider = sliderWrap.getElementsByClassName("slide")

function next() {

    sliderWrap.append(slider[0])

}
function prev() {

    sliderWrap.prepend(slider[slider.length - 1])

}

$(".landing .bullets li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

})

$(window).ready(function () {

    $(".landing .hidden").animate({

        opacity: 1

    })

    $(".landing .left").delay(300).animate({

        left: 0,

        opacity: 1

    })

    $(".landing .bottom").delay(300).animate({

        bottom: 20,

        opacity: 1

    })

})


// services Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".services").offset().top - 400) {

        $(".services .hidden").animate({

            opacity: 1

        })

        $(".services .left").animate({

            left: 0,

            opacity: 1

        }).delay(300)

        $(".services .right").animate({

            right: 0,

            opacity: 1

        }).delay(300)

        $(".services .top").animate({

            top: 0,

            opacity: 1

        }).delay(300)

        $(".services .bottom").animate({

            bottom: 0,

            opacity: 1

        }).delay(300)

    }

})

// design Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".design").offset().top - 400) {

        $(".design .right").animate({

            right: 0,

            opacity: 1

        })

        $(".design .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".design .top").animate({

            top: 0,

            opacity: 1

        })

        $(".design .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// Portfolio Section 

let portfolioHead = document.querySelectorAll(".portfolio ul li")
let portfolioBox = document.querySelectorAll(".portfolio .box")

portfolioHead.forEach((li) => {
    li.addEventListener("click", function () {
        portfolioHead.forEach((li) => {
            li.classList.remove("active")
            this.classList.add("active")
        })
        portfolioBox.forEach((box) => {
            box.style.display = "none"
        })
        document.querySelectorAll(li.dataset.class).forEach((e) => e.style.display = "block")
    })
})

let PortfolioImg = document.querySelectorAll(".portfolio img")

PortfolioImg.forEach((img)=> {

    img.addEventListener("click" , function () {

        let OverlyBox = document.createElement("div")

        OverlyBox.className = "overly-box"
    
        document.body.appendChild(OverlyBox)
    
        let BoxImg = document.createElement("div")
    
        BoxImg.className = "Box-img"
    
        OverlyBox.appendChild(BoxImg)

        if (img.alt !== "") {

            let head = document.createElement("h3")

            head.className = "box-head"

            BoxImg.appendChild(head)

            let headText = document.createTextNode(img.alt)

            head.appendChild(headText)

        }
    
        let ImgBox = document.createElement("img")
    
        ImgBox.src = img.src;
    
        BoxImg.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        BoxImg.appendChild(CloseButton)

        CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button" || el.target.className === "overly-box") {

                OverlyBox.remove()

            }
            
        })
    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".portfolio").offset().top - 400) {

        $(".portfolio .hidden").animate({

            opacity: 1

        })

        $(".portfolio .left").delay(300).animate({

            left: 0,

            opacity: 1

        })

        $(".portfolio .top").delay(400).animate({

            top: 0,

            opacity: 1

        })

        $(".portfolio .right").delay(600).animate({

            right: 0,

            opacity: 1

        })

        $(".portfolio .bottom").delay(200).animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// About Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".about").offset().top - 400) {

        $(".about .hidden").animate({

            opacity: 1

        })

        $(".about .left").animate({

            left: 0,

            opacity: 1

        })

    }

})

// State Section 

let StateSection = document.querySelector(".state")

let StateOffsetTop = StateSection.offsetTop;

let StateNumber = document.querySelectorAll(".state .number")

let Started = false

function StartCounter(el) {

    let Goal = el.dataset.goal

    let Counte = setInterval(function () {

        el.textContent++ ;

        if (el.textContent === Goal) {

            clearInterval(Counte)

        }

    } , 2000 / Goal)

}

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".state").offset().top - 400) {

        $(".state .left").animate({

            left: 0,

            opacity: 1

        })

        $(".state .top").animate({

            top: 0,

            opacity: 1

        })

        $(".state .bottom").animate({

            bottom: 0,

            opacity: 1

        })

        $(".state .right").animate({

            right: 0,

            opacity: 1

        })

    }

})

// Skills Section 

let SkillsSection = document.querySelector(".our-skills")

let SkillsOffsetTop = SkillsSection.offsetTop;

let SkillsProg = document.querySelectorAll(".our-skills .prog-holder .prog span")

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".our-skills").offset().top - 400) {

        $(".our-skills .left").animate({

            left: 0,

            opacity: 1

        })

        $(".our-skills .right").animate({

            right: 0,

            opacity: 1

        })

        $(".our-skills .top").animate({

            top: 0,

            opacity: 1

        })

        $(".our-skills .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// pricing Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".pricing").offset().top - 400) {

        $(".pricing .hidden").animate({

            opacity: 1

        })

        $(".pricing .top").animate({

            top: 0,

            opacity: 1

        })

        $(".pricing .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})

// Contact Section 

$(window).scroll(function () {

    if ($(window).scrollTop() >= $(".contact-us").offset().top - 400) {

        $(".contact-us .hidden").animate({

            opacity: 1

        })

        $(".contact-us .top").animate({

            top: 0,

            opacity: 1

        })

        $(".contact-us .right").animate({

            right: 0,

            opacity: 1

        })

        $(".contact-us .left").animate({

            left: 0,

            opacity: 1

        })

        $(".contact-us .bottom").animate({

            bottom: 0,

            opacity: 1

        })

    }

})


window.onscroll = function () {

    // State Section 

    if (window.scrollY >= StateOffsetTop - 400) {

        if (!Started) {

            StateNumber.forEach((span)=> {

                StartCounter(span)

            })

        }

        Started = true


    }

    // Skills Section 

    if (window.scrollY >= SkillsOffsetTop - 400) {

        SkillsProg.forEach((span)=> {

            span.style.width = span.dataset.progress

        })

    }

}

// Button To Top 

$("button.up").click(function () {

    $("html , body").animate({

        scrollTop: 0

    })

})

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1000) {

        $("button.up").addClass("active")
        
    } else {

        $("button.up").removeClass("active")

    }

})