// Your JavaScript goes here.

window.addEventListener("load", function(){

  const button = document.getElementById('toggle_button');
  button.addEventListener("click", function() {

    const movList = document.querySelectorAll("ul.second_five li");
    movList.forEach(element => {

      if(element.style.display == "none"){
          element.style.display = "list-item";
      }
      else{
          element.style.display = "none";
      }
    });
  })
})