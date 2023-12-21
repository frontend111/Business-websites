// active humberg
let menuIcon = document.querySelector(".menu-icon");
let navlist= document.querySelector(".navlist");
menuIcon.addEventListener("click",()=>{
    // menu-Icon
    menuIcon.classList.toggle("active");
    // open and close  menu-icon
    navlist.classList.toggle("active");
    document.body.classList.toggle("open")

});
//remove open and close navbar
navlist.addEventListener("click",()=>{
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
    document.body.classList.remove("open")

});


// rotate animation in img

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");



ScrollReveal().reveal(".home",{duration:3000})
ScrollReveal().reveal(".about",{duration:4000})
ScrollReveal().reveal(".services",{duration:4000})