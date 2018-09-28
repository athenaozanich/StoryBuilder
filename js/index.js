
const navSidebar = document.getElementsByClassName("sidebar")[0];
let navOpen = false;
document.addEventListener("click",function(e){
  const clicked = e.target.getAttribute("class");
  if(clicked === "nav-menu" && navOpen != true){
    navSidebar.style.left = "-7%";
    navOpen = true;
  }else if (navOpen === true) {
    navSidebar.style.left = "-86%";
    navOpen = false;
  }
});
