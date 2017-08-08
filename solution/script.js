var stepCount = 0;

$("document").ready(function() {
  updateAdventureMessage(0);
  $("#startover").hide();
  $("button").click(function(){
    updateAdventure($(this).attr("id"));
  });
});

function updateAdventure(option){
  if(stepCount === 0 && option === "option1"){
    stepCount = 1;
    updateAdventureMessage(stepCount);
  } else if (stepCount === 0 && option === "option2"){
    stepCount = 2;
    updateAdventureMessage(stepCount);
  } else if (stepCount === 1 && option === "option1"){
    stepCount = 3;
    updateAdventureMessage(stepCount);
  } else if (stepCount === 1 && option === "option2"){
    stepCount = 4;
    updateAdventureMessage(stepCount);
  } else if (stepCount === 2 && option === "option1"){
    stepCount = 5;
    updateAdventureMessage(stepCount);
  } else if (stepCount === 2 && option === "option2"){
    stepCount = 6;
    updateAdventureMessage(stepCount);
  } else if(option=== "startover"){
    reset();
  }else {
    gameover();
  }
}

function updateAdventureMessage(stepCount){
  var adventureObject = getAdventure(stepCount);
  $("#story").html(adventureObject['story']);
  $("#prompt").html(adventureObject['prompt']);
  $("#option1").html(adventureObject['option1']);
  $("#option2").html(adventureObject['option2']);
}
function gameover(){
  $("#story").html("THE END. ");
  $("#prompt").html("");
  $("#option1").hide();
  $("#option2").hide();
  $("#startover").show();
}
function reset(){
  stepCount = 0;
  updateAdventureMessage(stepCount);
  $("#option1").show();
  $("#option2").show();
  $("#startover").hide();
}
