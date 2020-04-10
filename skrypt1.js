$(".icon").on("click",responsiveNavbar);
function responsiveNavbar() {
  let x = $("#mynavb")[0];
  if ( x.className == "mynav" ) 
    x.className = "mynav responsive";
   else 
    x.className = "mynav";
}
let lastScrollTop = 0;
$(window).scroll(function(){
  let st=$(this).scrollTop();
  if(st>lastScrollTop)
        //on scroll down
        $("#mynavb").fadeOut(500);
  else
        //on scroll up
        $("#mynavb").fadeIn(500);
  lastScrollTop = st;
});