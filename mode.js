let modeBtn = document.querySelector(".right-nav p");
let image = document.querySelector(".main-image img");
let imageText = document.querySelector(".main-image-h4");
let play = document.querySelector(".play-button");
let playSpan = document.querySelector(".play-button span");
let icons = document.querySelectorAll(".footer-skill");
let mic = document.querySelectorAll(".mic-emoji");

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
        if(gaana == "playing"){
        playSpan.innerHTML ='<img src="images/icons/whitemic.gif" alt="" height="10px" width="10px">';
        }

    }else if(mode == "dark"){
        mode = "light"
        body.classList.remove("dark");
        image.src ="images/main-profile.png";
        clickAudio.play();
        if(gaana == "playing"){
        playSpan.innerHTML ='<img src="images/icons/blackmic.gif" alt="" height="10px" width="10px">';
        }
    }
})
let audio = "play";
let addo = true;
play.addEventListener("click",()=>{

    if(audio == "play"){
    gaana = "playing";
    playAudio.play();
    playAudio.loop=true;
    if(mode == "dark"){
    playSpan.innerHTML ='<img src="images/icons/whitemic.gif" alt="" height="10px" width="10px">';
    }else if(mode == "light"){
    playSpan.innerHTML ='<img src="images/icons/blackmic.gif" alt="" height="10px" width="10px">';
    }
     console.log(addo);
    if(addo == true){
    timerID = setTimeout(()=>{

       if(mode == "light")
       {
        image.src="images/main-profile-dog.png";
        imageText.innerText = "Spike"
       }else if(mode == "dark"){
        image.src="images/dark-profile-dog.png";
        imageText.innerText = "Spike"
       }
    },4200)

    timerID2 =setTimeout(()=>{
        if(mode == "light")
       {
         image.src="images/main-profile.png";
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
        playAudio.currentTime = 0;
        audio = "play";
        playSpan.innerHTML ="<span>&#9654;</span>"
        clearTimeout(timerID); 
        clearTimeout(timerID2); 
        addo =true;
    }

})
icons.forEach((val)=>{
    val.addEventListener("mouseover",()=>{
        iconsSound.play();

    })
})