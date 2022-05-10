// Header Section 


$(".header .link > i").click(function () {

    $(".header .link ul").slideToggle()

})

$(".header ul li a").click(function (event) {

    event.preventDefault()

    $(this).addClass("active").parent().siblings().find("a").removeClass("active")

    console.log()

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

let landingSlide = document.querySelectorAll(".landing .slide")

let landingArrey = ["landing.jpg" , "landing-2.jpg" , "landing-3.jpg" , "landing-4.jpg"]

landingSlide.forEach((slide)=> {

    setInterval(function () {

        let randomNumber = Math.floor(Math.random() * landingArrey.length)

        slide.style.backgroundImage = "url(images/"+ landingArrey[randomNumber] +")"

    } , 10000)
})

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



// Box Model Section 

$(".box-model .icon").click(function () {

    $(".box-model").toggleClass("active")

})

document.body.classList.add(localStorage.getItem("bodyColor"))

let elColor = document.querySelectorAll(".box-model .color ul li")

let bodyColor = []


for (let i = 0; i < elColor.length; i++) {

    bodyColor.push(elColor[i].getAttribute("data-color"))

    elColor[i].addEventListener("click" , function () {

        document.body.classList.remove(...bodyColor)

        document.body.classList.add(elColor[i].getAttribute("data-color"))

        localStorage.setItem("bodyColor" , elColor[i].getAttribute("data-color"))

    })

}

// Portfolio Section 

$(".portfolio .shuffled ul li").click(function () {

    $(this).addClass("active").siblings().removeClass("active")

    var Fillter = $(this).data("class")

    $(".portfolio .imges-container .box").fadeOut()

    $(".portfolio .imges-container " + Fillter ).fadeIn()
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
    
        let ImgBox = document.createElement("img")
    
        ImgBox.src = img.src;
    
        BoxImg.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        BoxImg.appendChild(CloseButton)

        CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {

                BoxImg.remove()

                OverlyBox.remove()
                
            }
            
        })
    })

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

// Skills Section 

let SkillsSection = document.querySelector(".our-skills")

let SkillsOffsetTop = SkillsSection.offsetTop;

let SkillsProg = document.querySelectorAll(".our-skills .prog-holder .prog span")


window.onscroll = function () {

    // State Section 

    if (window.scrollY >= StateOffsetTop) {

        if (!Started) {

            StateNumber.forEach((span)=> {

                StartCounter(span)

            })

        }

        Started = true


    }

    // Skills Section 

    if (window.scrollY >= SkillsOffsetTop) {

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