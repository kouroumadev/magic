$("document").ready(function() {
  allBtn[0].hidden = true;
});
var allInpt = document.querySelector("input");
var allBtn = document.querySelectorAll("button");
var valGen = Math.floor((Math.random() * 100) + 1);


$(allInpt).on("mouseenter", function() {
  //allBtn[0].hidden = true;
});



$(allBtn[1]).on("click",function(){
  if(ifErase() === 1){
    alert("Please fill the text box !!!");
  }
  else{
    var valStart = $("#atNumber").text();
    var valEnd = parseInt(valStart,10);

    if (valEnd > 1){
      backEnd();
      document.getElementById('atNumber').innerHTML = valEnd-1;
    }
    else {
      alert("Game over!! click the RESTART button");
      document.getElementById('atNumber').innerHTML = 0;
      restartGame();
    }    
  }
});

function restartGame() {
  allBtn[0].hidden = false;
  allBtn[1].hidden = true;
}

function backEnd() {
  if(allInpt.valueAsNumber > valGen) {
    alert("It's lesser");
  }
  else if(allInpt.valueAsNumber < valGen) {
    alert("It's bigger");
  }
  else {
    alert("CONGRATULATIONS!! the magic number is "+valGen);
    restartGame();
  }
}


$(allBtn[0]).on("click",function(){ 
  window.location.reload();
});


function ifErase(){
  var flag = 0;
  if(allInpt.valueAsNumber === 0){
    flag = 1;
  }
  return flag;
}
