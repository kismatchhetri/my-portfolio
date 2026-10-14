let navEle = document.querySelector("nav");
let headerEle = document.querySelector("header");
let sectionEle = document.querySelector("section");
let articleEle = document.querySelector(".article");
let aboutBtn = document.querySelector(".about-link");
let backBtn = document.querySelectorAll(".section-button");
let reactBtn = document.querySelector(".footer-react");

let aboutPage = true;
aboutBtn.addEventListener("click",()=>{
  if(aboutPage){
  headerEle.style.display = "none";
  articleEle.style.display = "grid";
  aboutBtn.innerHTML = "back";
  clickAudio.play();
  aboutPage = false
  }else{
  headerEle.style.display = "block";
  articleEle.style.display = "none";
  aboutBtn.innerHTML = "about";
  clickAudio.play();
  aboutPage = true;
  }
})

reactBtn.addEventListener("click",()=>{
  navEle.style.display="none";
  headerEle.style.display="none";
  sectionEle.style.display="grid";
}
)

backBtn.forEach((val)=>{
val.addEventListener("click",()=>{
  sectionEle.style.display="none";
  navEle.style.display="flex";
  headerEle.style.display="grid";
})
})
