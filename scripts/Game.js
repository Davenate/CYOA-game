var message = '';



function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//  var getePathResult = function(room) {
//       var html = '<p> ' + room.results[0]+ '</p>';
//       console.log(html);
//       alert("you chose poorly! ill add something that returns you to main page");
// }

function choosePathObject (room) {
   var html = '<h1> ' + room.pathName + '</h1>';
  html += '<p> ' + room.test + '</p>';
  for (var i = 0; i < room.paths.length; i++)
  {
    html += '<button onclick="proceed();" id="proceed" class="'+i+'"> ' + room.paths[i] + '</button>';

  }
   
   return html;
}

// if (gameData.paths === true){
// message = choosePath (gameData);
// 	print(message);
// }




  var hero = "";
  function heroChoiceA() {
    var apprenticeButton = document.getElementById("rogue");
    hero = "Rogue";
    document.getElementById("ready").innerHTML = "Too bad, you get to be the  " + (hero)+" instead."
    document.getElementById("enter").disabled = false;
     document.getElementById("pgame").disabled = false;
    }
     function heroChoiceW() {
    var apprenticeButton = document.getElementById("rogue");
    hero = "Rogue";
    document.getElementById("ready").innerHTML = "Did you mean to pick the Rogue? Because you picked the " + (hero)+"."
    document.getElementById("enter").disabled = false;
     document.getElementById("pgame").disabled = false;

  }
   function heroChoiceR() {
    var apprenticeButton = document.getElementById("rogue");
    hero = "Rogue";
    document.getElementById("ready").innerHTML = "You have chosen the " + (hero)+". Great choice!";
    document.getElementById("enter").disabled = false;
    document.getElementById("pgame").disabled = false;
  } 
  ///////restore this function to restore game///////////////////////////
                                                         // function proceed() {  
                                                         //    var html = choosePathObject(gameDataObject.outTown)
                                                         //               $("#game").append(html);
                                                         //               alert("doing stuff");
                                                         //             };
              
               

      //            function proceed() {  
      // var html = choosePathObject(gameDataObject.forest)
      //            $("#game").append(html);
              
      //          }
      //            alert("stuff");
      // if (room.paths[0] = true)
      //   alert("it work!")
      // else
      //   alert("more workds!");

    // if ((hero = rogue || apprentice) && (room.paths[0] = true)) {
    //   getePathResult(room);
    //   }
    // else{
    //   html += '<p> ' + room.results[3]+ '</p>';
    //     html +=choosePathObject(gameDataObject.outTown)
    //               $("#game").append(html);



//////////////Remove this code if I ever get the other game to work///////////////////
$(document).ready(function(){
  $(".enter").click(function(){
    alert("Sorry, this portion is unfinished. Try Goblin Punch instead.");
  })});
   ///////////////////////////////////////////////////////////////////////

    

// can restore these functions to restore previous game/////////////////////////////////////////////////////
                                                               // $(document).ready(function(){
                                                               //    $(".enter").click(function(){
                                                               //        $("#wrapper").hide();
                                                               //        $("#game").show();
                                                               //    })});
                                                            



                                                              // $(".enter").click(function(){
                                                              //     var html =choosePathObject(gameDataObject.Tavern)
                                                              //     $("#game").append(html);
                                                              //   });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 
//////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////Goblin Punch//////////////////////////////////////////
          

  //////////////////////Random number for you/////////////////        
  function Dice(sides){
  this.sides = sides;
  this.roll = function() {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;}}

    var dice = new Dice(6);


////////////////Random number for Goblin//////////////////
          function DiceG(sides){
          this.sides = sides;
          this.roll = function() {
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;}}

            var diceG = new DiceG(6);
   

function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;}

function printNumberG(numberG){
   var placeholder2 = document.getElementById("placeholder2");
  placeholder2.innerHTML = numberG;}


var punch = document.getElementById("punch");

var gHealth = parseInt("5")
  var Health = parseInt("6")

punch.onclick = function() {
    var result = dice.roll();
  var resultG = diceG.roll();
    var placeholder3 = document.getElementById("placeholder3");
   placeholder3.innerHTML = "";
      
    printNumber(result);
    printNumberG(resultG);

    if (result >= resultG){
  placeholder3.innerHTML = "Goblin takes 1 damage!";
     gHealth = document.getElementById("gHealth");
   gHealth.innerHTML -= 1;
   if (gHealth.innerHTML == 0){
    alert("You win!")
    document.getElementById("punch").disabled = true;
       
   };}
  else{
placeholder3.innerHTML = "You take 1 damage!";
 Health = document.getElementById("Health");
   Health.innerHTML -= 1;
    if (Health.innerHTML == 0){
    alert("You lose!");
    document.getElementById("punch").disabled = true;
      };}}

///////////////attempting to get a refresh button///////////////
  // refresh.onclick = function() {
  //   document.getElementById("punch").disabled = false;
  // var gHealth = parseInt("5")
  // var Health = parseInt("6")
  // }

  
 


  // $("#game").append(html);



  




