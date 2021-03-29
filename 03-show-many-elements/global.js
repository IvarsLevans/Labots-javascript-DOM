  window.addEventListener("load", function(){

  const button = document.getElementById('button');
  button.addEventListener("click", function() {

    const hElements = document.getElementsByClassName('show_me');
    Array.from(hElements).forEach(element => {

      element.style.display = "block";
    });
  })
});