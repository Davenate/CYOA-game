var message = '';
var game;
var hero;


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function choosePathObject (room) {
   var html = '<h2>PathName: ' + room.pathName + '</h2>';
  html += '<p>Test ' + room.test + '</p>';
  for (var i = 0; i < room.paths.length; i++){
    html += '<button class="'+i+'"> ' + room.paths[i] + '</button>';
  }
   
  return html;
}

if (gameData.paths === true){
message = choosePath (gameData);
	print(message);
}




  var hero = "";
  function heroChoiceA() {
    var apprenticeButton = document.getElementById("apprentice");
    hero = "Apprentice";
    document.getElementById("ready").innerHTML = "You have chosen the " + (hero)+"."
    document.getElementById("enter").disabled = false;
    }
     function heroChoiceW() {
    var apprenticeButton = document.getElementById("warrior");
    hero = "Warrior";
    document.getElementById("ready").innerHTML = "You have chosen the " + (hero)+"."
    document.getElementById("enter").disabled = false;
  }
   function heroChoiceR() {
    var apprenticeButton = document.getElementById("rogue");
    hero = "Rogue";
    document.getElementById("ready").innerHTML = "You have chosen the " + (hero)+".";
    document.getElementById("enter").disabled = false;
  }

    


   $(document).ready(function(){
      $(".enter").click(function(){
          $("#wrapper").hide();
          $("#game").show();
      });
      $(".choice").click(function(){
          var html =choosePathObject(gameDataObject.outTown)
          $("#game").append(html);
      });

    });




