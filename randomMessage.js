
let messageBtn = document.querySelector(".random-message");
console.log(messageBtn);

let messages = ["Hey, You!","Take a Look","Namaste","Let's \n Connect","Welcome!"];
let messagesLength = messages.length;
let messageAudios = new Audio("sounds/messages.mp3");
let imageArea = document.querySelector(".main-image img");


let a= "start";
let showTimer;
let hideTimer;

image.addEventListener("mouseover",()=>{
let randomNumber = Math.floor(Math.random()*messagesLength); 
let randomMessage = messages[randomNumber];
messageAudios.play();
if(a == "start"){
messageBtn.style.display = "block";
messageBtn.innerText = randomMessage;
a= "end";
}else if(a == "end"){
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    showTimer = setTimeout(()=>{
    messageBtn.style.display = "block";
    messageBtn.innerText = randomMessage;
    },1000);
    hideTimer = setTimeout(()=>{
    messageBtn.style.display = "none";
    messageBtn.innerText = randomMessage;
    },4000);
}
})

image.addEventListener("mouseleave",()=>{
    clearTimeout(showTimer);
    clearTimeout(hideTimer);
    messageBtn.style.display = "none";
})
