var stepCount = 0;

$("document").ready(function() {
  updateAdventureMessage(0);
  $("#startover").hide();
  $("button").click(function(){
    updateAdventure($(this).attr("id"));
  });
});

function updateAdventure(option){

  // IF we're on step 0 and the user chose option1,
  // update the stepCount to 1, and then call updateAdventureMessage with the new stepCount

  // IF we're on step 0 and the user chose option2,
  // update the stepCount to 2, and then call updateAdventureMessage with the new stepCount

  // IF we're on step 1 and the user chose option1,
  // update the stepCount to 3, and then call updateAdventureMessage with the new stepCount

  // IF we're on step 1 and the user chose option2,
  // update the stepCount to 4, and then call updateAdventureMessage with the new stepCount

  // IF we're on step 2 and the user chose option1,
  // update the stepCount to 5, and then call updateAdventureMessage with the new stepCount

  // IF we're on step 2 and the user chose option2,
  // update the stepCount to 6, and then call updateAdventureMessage with the new stepCount

  // IF the user chose option startover
  // call the reset function

  // IF none of those conditions apply, call gameover

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
