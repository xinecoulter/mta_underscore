// Refactor your code with underscore
// Prompt the user
// Please choose a startLine
// Please chooose a startStation
// Please choose an endLine
// Please choose an endStation
// Find the intersection
// Display the number of stops
// Track the total journeys taken
// Calculate total cost of journeys taken at $2.50 per ride.

function Train(name, stations) {
  this.name = name;
  this.stations = stations;
}

Train.prototype.distance = function(board, exit) {
  board = this.stations.indexOf(board);
  exit = this.stations.indexOf(exit);
  return Math.abs(board - exit);
};

var lStations = [ "8th", "6th", "Union Square", "3rd", "1st" ];
var nStations = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ];
var sixStations = [ "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ];
var gStations = [ "Greenpoint", "Nassau", "Metropolitan", "Broadway" ];

var lTrain = new Train('The L Train', lStations);
var nTrain = new Train('The N Train', nStations);
var sixTrain = new Train('The Six Train', sixStations);
var gTrain = new Train('The G Train', gStations);

var trains = [lTrain, nTrain, sixTrain, gTrain];


// Functions for displaying in prompts
function displayLines() {
  var trainNames = "";
  _.each(trains, function(train) {
    trainNames += train.name + "\n";
  });
  return trainNames.trim();
}

function displayStations(trainInput) {
  var selectedTrain = null;
  _.each(trains, function(train) {
    if (train.name === trainInput) {
      selectedTrain = train;
    }
  });
  var stationNames = "";
  _.each(selectedTrain.stations, function(station) {
    stationNames += station + "\n";
  });
  return stationNames.trim();
}

// Prompts
var msg1 = "Which train would you like to get on?\n" + displayLines();
var startTrain = prompt(msg1);
var msg2 = "At which station would you like to get on?\n" + displayStations(startTrain);
var startStation = prompt(msg2);
var msg3 = "Which train would you like to get off?\n" + displayLines();
var endTrain = prompt(msg3);
var msg4 = "At which station would you like to get off?\n" + displayStations(endTrain);
var endStation = prompt(msg4);









// var msg = "Which train would you \nlike to get on?\n" + displayLines();
// var startTrain = prompt(msg);

// function displayLines() {
//   var trainNames = "";
//   for (var i = 0; i < trains.length; i++) {
//     trainNames += trains[i].name + "\n";
//   }

//   forEach(trains, trainName);

//   return trainNames.trim();
// }


// function trainName(train){
//   return train.name + "\n"
// }

// function forEach(array, func) {
//   for (var i = 0; i < array.length; i++) {
//     func(array[i]);
//   }
// }

// function map(array, func) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     newArray.push(func(array[i]));
//   }
//   return newArray;
// }

// function displayStations() {
//   var train = null;
//   for (var j = 0; j < trains.length; j++) {
//     if (trains[j].name === startTrain) {
//       train = trains[j];
//     }
//   }
//   var trainStations = "";
//   for (var k = 0; k < train.stations.length; k++) {
//     trainStations += train.stations[k] + "\n";
//   }
//   return trainStations.trim();
// }

// var msg2 = "Which station would you \nlike to get on?\n" + displayStations();
// var startStation = prompt(msg2);