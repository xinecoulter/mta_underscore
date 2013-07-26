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
  var selectedTrain = _.find(trains, function(train) {
    return train.name === trainInput;
  });
  return selectedTrain.stations.join("\n");
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

// Function to handle if starting train and ending train are the same or different. Could be broken up further. Whoops.
function calculateNumberOfStops(startTrain, startStation, endTrain, endStation) {
  if (startTrain === endTrain) {
    var trainToCalculate = _.find(trains, function(train) {
      return train.name === startTrain;
    });
    // This calculates the number of stops:
    var numberOfStops = Math.abs(trainToCalculate.stations.indexOf(endStation) - trainToCalculate.stations.indexOf(startStation));

    var alertMessage = "There are " + numberOfStops + " stops between " + startStation + " and " + endStation + " on the " + startTrain + ".";
    alert(alertMessage);
  } else {
    var startTrainToCalculate = _.find(trains, function(train) {
      return train.name === startTrain;
    });
    var endTrainToCalculate = _.find(trains, function(train) {
      return train.name === endTrain;
    });

    // This will return an array of intersecting stations:
    var intersectingStation = (_.intersection(startTrainToCalculate.stations, endTrainToCalculate.stations))[0];
    // This calculates the number of stops on the starting train:
    var numberOfStopsOnStartTrain = Math.abs(startTrainToCalculate.stations.indexOf(intersectingStation) - startTrainToCalculate.stations.indexOf(startStation));
    // This calculates the number of stops on the ending train:
    var numberOfStopsOnEndTrain = Math.abs(endTrainToCalculate.stations.indexOf(endStation) - endTrainToCalculate.stations.indexOf(intersectingStation));
    // This calculates the number of total stops:
    var numberOfTotalStops = numberOfStopsOnStartTrain + numberOfStopsOnEndTrain;

    var alertMessage = "There are " + numberOfStopsOnStartTrain + " stops between " + startStation + " and your connection at " + intersectingStation + " on the " + startTrain + ".\nThere are " + numberOfStopsOnEndTrain + " stops between " + intersectingStation + " and " + endStation + " on the " + endTrain + ".\nThere are a total of " +numberOfTotalStops + " stops.";
    alert(alertMessage);
  }
}

calculateNumberOfStops(startTrain, startStation, endTrain, endStation);