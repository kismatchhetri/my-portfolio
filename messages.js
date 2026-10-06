
let messageBtn = document.querySelector(".random-message");
console.log(messageBtn);

let messages = ["Hey, You!","Take a Look","Namaste","Let's \n Connect","Welcome!"];
let messagesLength = messages.length;
let messageAudio = new Audio("sounds/messag.mp3")
let imageArea = document.querySelector(".main-image img");


image.addEventListener("mouseover",()=>{
let randomNumber = Math.floor(Math.random()*messagesLength); 
let randomMessage = messages[randomNumber];
messageBtn.style.display = "block";
messageBtn.innerText = randomMessage;
messageAudio.play();
})
image.addEventListener("mouseleave",()=>{
    messageBtn.style.display = "none";
})



