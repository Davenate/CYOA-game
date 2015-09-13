// var message = '';
// var game;
// var hero;


// function print(message) {
//   var outputDiv = document.getElementById('output');
//   outputDiv.innerHTML = message;
// }

// function choosePath ( gameData) {
//    var choice = '<h2>PathName: ' + gameData.pathName + '</h2>';
//   choice += '<p>Test ' + gameData.test + '</p>';
//    choice += '<button>Paths: ' + gameData.paths + '</button>';
//   return choice;
// }

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
      });
    });




