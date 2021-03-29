// Your JavaScript goes here.

window.addEventListener("load", function(){

    const nametxtbox = document.getElementById("full_name");
    nametxtbox.addEventListener("keyup", function() {
  
      const greeting = document.getElementById("greeting");
      greeting.innerHTML = ("Hey, " + nametxtbox.value + "!");
  
    });
  
  });