$(document).ready(function(){
  $("button").click(function(){
    $.getJSON("getsthviaajax.js", function(result){
      console.log("test");
        $("#figs").append(result + " ");
      
    });
  });
});