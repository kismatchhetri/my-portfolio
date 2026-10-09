let aboutBtn = document.querySelector(".about-link");
let landingSection = document.querySelector("header");
let projectSection = document.querySelector("section");
let backSection = document.querySelector(".last-button");
let article = document.querySelector("article");

let show = "yes";
aboutBtn.addEventListener("click",()=>{
  if(show == "yes"){
  landingSection.style.display="none";
  projectSection.style.display="none";
  backSection.style.display="none"
  article.style.display="grid";
  clickAudio.play();
  show = "no";
  }else if(show == "no"){
  projectSection.style.display="none";
  backSection.style.display="none";
  article.style.display="none";
  landingSection.style.display="block";
  clickAudio.play();
  show = 'yes';
  }

})