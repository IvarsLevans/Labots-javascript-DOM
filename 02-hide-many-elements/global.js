window.addEventListener("load", function(){

  const hButton = document.getElementById('button');
  hButton.addEventListener("click", function() {

      const hElements = document.getElementsByClassName('hide_me');
      Array.from(hElements).forEach(element => {
            element.style.display = "none";
      });
  })
});