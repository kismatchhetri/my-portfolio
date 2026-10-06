let modeBtn = document.querySelector(".right-nav p");
let image = document.querySelector(".main-image img");
let play = document.querySelector(".play-button");
let icons = document.querySelectorAll(".footer-skill");

let body = document.body;
let clickAudio = new Audio("sounds/click.mp3");
let playAudio = new Audio("sounds/aipodcast.mp3");
let iconsSound = new Audio("sounds/pop.mp3");

let mode = "light";
modeBtn.addEventListener("click" , ()=>{
    if(mode == "light"){
        mode = "dark";
        image.src ="images/dark-profile.png";
        body.classList.add("dark");
        clickAudio.play();

    }else if(mode == "dark"){
        mode = "light"
        body.classList.remove("dark");
        image.src ="images/main-profile.png";
        clickAudio.play();
    }
})

let audio = "play"
play.addEventListener("click",()=>{
    if(audio == "play"){
    playAudio.play();
    play.innerHTML ="<span>&#9836;</span>";
    audio = "pause";
    }else{
        playAudio.pause();
        audio = "play"
        play.innerHTML ="<span>&#9654;</span>";
    }

})

icons.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        iconsSound.play();

    })
})