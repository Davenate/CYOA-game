var message = '';



function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function choosePathObject (room) {
   var html = '<h1> ' + room.pathName + '</h1>';
  html += '<p> ' + room.test + '</p>';
  for (var i = 0; i < room.paths.length; i++){
    html += '<button id="proceed" class="'+i+'"> ' + room.paths[i] + '</button>';

  }
   
   return html;
}

// if (gameData.paths === true){
// message = choosePath (gameData);
// 	print(message);
// }




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
      })});

      $(".enter").click(function(){
          var html =choosePathObject(gameDataObject.Tavern)
          $("#game").append(html);
      });

       $("#proceed").click(function(){
          alert("I work");
          var html =choosePathObject(gameDataObject.outTown)
          $("#game").append(html);
      });

//id=0, if hero = rogue || apprentice, room.results[0[ else room.results[3]
//id=1 room.results[1]
//id=0 room.results[2] 
    




