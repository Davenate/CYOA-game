var message = '';
var game;
var hero;


function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function choosePath ( gameData) {
   var choice = '<h2>PathName: ' + gameData.pathName + '</h2>';
  choice += '<p>Test ' + gameData.test + '</p>';
   choice += '<button>Paths: ' + gameData.paths + '</button>';
  return choice;
}

if (gameData.paths === true){
message = choosePath (gameData);
	print(message);
}


