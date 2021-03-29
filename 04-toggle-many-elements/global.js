// Your JavaScript goes here.

window.addEventListener("load", function(){

  const button = document.getElementById('button');
    button.addEventListener("click", function() {
  
      const tglElements = document.getElementsByClassName('toggle_me');
      Array.from(tglElements).forEach(element => {

            if(element.style.display == "none"){
                element.style.display = "block";
            }
            else{
                element.style.display = "none";
            }
      })
  })
})