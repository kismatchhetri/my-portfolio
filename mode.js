let modeBtn = document.querySelector(".right-nav p");
let image = document.querySelector(".main-image img");
let imageText = document.querySelector(".main-image-h4");
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

let audio = "play";
let addo = true;
play.addEventListener("click",()=>{
    if(audio == "play"){
    playAudio.play();
    play.innerHTML ="<span>&#9836;</span>";

    if(addo == true){
    timerID = setTimeout(()=>{
       if(mode == "light")
       { image.src="images/main-profile-dog.png";
        imageText.innerText = "Spike"
       }else if(mode == "dark"){
        image.src="images/dark-profile-dog.png";
        imageText.innerText = "Spike"
       }
    },4200)
    timerID2 =setTimeout(()=>{
        if(mode == "light")
       { image.src="images/main-profile.png";
        imageText.innerText = "Kismat Chhetri"
       }else if(mode == "dark"){
        image.src="images/dark-profile.png";
        imageText.innerText = "Kismat Chhetri"
       }
    },7000);
    
    addo=false;
    }
    audio = "pause";
    }else{
        playAudio.pause();
        audio = "play"
        play.innerHTML ="<span>&#9654;</span>";
        clearTimeout(timerID); 
        clearTimeout(timerID2); 
    }

})

icons.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        iconsSound.play();

    })
})