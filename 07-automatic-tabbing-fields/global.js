// Your JavaScript goes here.

window.addEventListener("load", function(){

  const areaCode = document.getElementById('first');
  const midNum = document.getElementById('second');
  const endNum = document.getElementById('third');

  areaCode.addEventListener("input", function(e){

    if(areaCode.value.length >= areaCode.maxLength){
      midNum.select();
    }
})

midNum.addEventListener("input", function(e){

    if(midNum.value.length >= midNum.maxLength){
        endNum.select();
    }
})
})