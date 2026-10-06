let modeBtn = document.querySelector(".right-nav p");
let image = document.querySelector(".main-image img");
console.log(image)
let body = document.body;
let mode = "light";
modeBtn.addEventListener("click" , ()=>{
    if(mode == "light"){
        mode = "dark";
        image.src ="images/dark-profile.png";
        body.classList.add("dark");
    }else if(mode == "dark"){
        mode = "light"
        body.classList.remove("dark");
        image.src ="images/main-profile.png";
    }
})