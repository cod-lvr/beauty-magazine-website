const nav = document.getElementById('navbar');
const links = document.querySelector('#myLinks');
var sticky = nav.offsetTop;
// scroll function
window.onscroll = function(){init()};
function init(){
    // console.log('hi');
    if(window.pageYOffset > sticky){
        nav.classList.add('sroll');
        nav.style.background = "white";
        nav.style.padding = "10px 40px"
    }else {
        nav.classList.remove('sroll');
        nav.style.background = "";
        nav.style.padding = ""
    }
}
// nav action
function myFunction() {
    
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  }
//   nav close 
const close = document.getElementById('close');

close.addEventListener('click', _ => {
    links.style.display = "none";
})
