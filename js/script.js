// Portfolio Section 

let PortfolioHead = document.querySelectorAll(".portfolio li")
let PortfolioBox = document.querySelectorAll(".portfolio .box")

PortfolioHead.forEach((li)=> {
    li.addEventListener("click" , RemoveActiveClass)
    li.addEventListener("click" , MangeBoxs)
})

function RemoveActiveClass() {
    PortfolioHead.forEach((li)=> {
            li.classList.remove("active")
            this.classList.add("active")
    })
}

function MangeBoxs() {
        PortfolioBox.forEach((box)=> {
            box.style.display = "none"
        })
        document.querySelectorAll(this.dataset.class).forEach((el)=> {

            el.style.display = "block"
    
        })
}

let PortfolioImg = document.querySelectorAll(".portfolio img")

PortfolioImg.forEach((img) => {
    
    img.addEventListener("click" , function () {
        
        let Overly = document.createElement("div")

        Overly.className = "overly-box"

        document.body.appendChild(Overly)

        let Box = document.createElement("div")

        Box.className = "Box-img"

        Overly.appendChild(Box)

        if (img.alt !== "") {
            let altBox = document.createElement("h3")

            altBox.className = "box-head"

            let altBoxText = document.createTextNode(img.alt)

            altBox.appendChild(altBoxText)

            Box.appendChild(altBox)
        }

        let ImgBox = document.createElement("img")

        ImgBox.src = img.src;

        Box.appendChild(ImgBox)

        let CloseButton = document.createElement("span")

        CloseButton.className = "close-button"

        Box.appendChild(CloseButton)

        CloseButtonText = document.createTextNode("X")

        CloseButton.appendChild(CloseButtonText)

        document.addEventListener("click" , function (el) {

            if (el.target.className === "close-button") {

                Box.remove()

                Overly.remove()

            }

        })

    })

})


// State Section 

let StateSction = document.querySelector(".state")
let Started = false

let StateOffsetTop = StateSction.offsetTop;


function StartCounter(el) {

    let goal = el.dataset.goal;

    let Counte = setInterval(function () {

        el.textContent++;

        if (el.textContent === goal) {

            clearInterval(Counte)

        }

    } , 2000 / goal)
}


// Skills Section 

let SkillsSection = document.querySelector(".our-skills")
let SkillsSpan = document.querySelectorAll(".our-skills span")

let SkillsOffsetTop = SkillsSection.offsetTop;

let SkillsHeight = SkillsSection.offsetHeight;

let PageHeight = window.innerHeight;


// button To Top 

let ButtonToUp = document.querySelector(".up")

ButtonToUp.onclick = function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth"
    })
}

window.onscroll = function () {

    // State Section

    let StateNumber = document.querySelectorAll(".state .number")

    if (window.scrollY >= StateOffsetTop ) {

        if (!Started) {

            StateNumber.forEach((num) => {
                StartCounter(num)
            })

        }

    }

    Started = true

    // Skills Section  
    if (window.scrollY >= (SkillsOffsetTop + SkillsHeight - PageHeight)) {

        SkillsSpan.forEach((span) => {

            span.style.width = span.dataset.progress

        })
    }

    // ButtonToUp
    if (window.scrollY >= 1000) {

        ButtonToUp.classList.add("active")

    } else {

        ButtonToUp.classList.remove("active")
    }
}