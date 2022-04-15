// Header Section 

$(".header .link i").click(function () {

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