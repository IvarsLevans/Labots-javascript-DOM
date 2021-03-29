window.addEventListener("load", function(){

  const moreLink = document.getElementById("more_text_link");
  moreLink.addEventListener("click", function(){

     const moreText = document.getElementById("more_text_content");
     moreText.style.display = "inline";
     moreLink.style.display = "none";
  });
});

