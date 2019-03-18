// Initialize Firebase
var config = {
  apiKey: "AIzaSyA4PaSG3NQcSTFRTZjV91HrVsSgbM8RPUw",
  authDomain: "trainschedule-ea14a.firebaseapp.com",
  databaseURL: "https://arrow-flies.firebaseio.com/",
  projectId: "arrow-flies",
  storageBucket: "arrow-flies.appspot.com",
  messagingSenderId: "439369351567"
};
var database = firebase.initializeApp(config);

// Create a variable to reference the database.
var database = database.database();

// -----------------------------

//button to add new events
$("#newEventBtn").on("click", function() {
  var eventName = $("#eventNameInput")
    .val()
    .trim();
  var category = $("#categoryInput")
    .val()
    .trim();
  var priority = $("#priorityInput")
    .val()
    .trim();    
  var nextDue = $("#nextDueInput")
    .val()
    .trim();
  var frequency = $("#freqInput")
    .val()
    .trim();

  // Creates local "temporary" object for holding Event data
  var newEvent = {
    name: eventName,
    category: category,
    priority: priority,
    nextDue: nextDue,
    freq: frequency
  };

  //Uploads data to the database
  database.ref().push(newEvent);

  console.log(newEvent.eventName);
  console.log(newEvent.category);
  console.log(newEvent.priority);
  console.log(newEvent.nextDue);
  console.log(newEvent.freq);

  // Clears all of the text-boxes
  $("#eventNameInput").val("");
  $("#categoryInput").val("");
  $("#priorityInput").val(""); 
  $("#nextDueInput").val("");
  $("#freqInput").val("");

  return false;
});

// Creates a Firebase event for adding events to the database and a row in the html
database.ref().on("child_added", function(childSnapshot) {
  //   console.log(childSnapshot.val());

  // Store everything into a variable
  var eventName = childSnapshot.val().eventName;
  var category = childSnapshot.val().category;
  var priority = childSnapshot.val().priority;
  var nextDue = childSnapshot.val().nextDue;
  var frequency = childSnapshot.val().freq;

  // Event info
  console.log(newEvent.eventName);
  console.log(newEvent.category);
  console.log(newEvent.priority);
  console.log(newEvent.nextDue);
  console.log(newEvent.freq);

  //First time
  var firstTimeConverted = moment(firstTrain, "hh:mm").subtract(1, "years");
  console.log(firstTimeConverted);

  // Current time
  var currentTime = moment();
  console.log("CURRENT TIME:" + moment(currentTime).format("HH:mm"));

  // Difference between times
  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
  console.log("DIFFERENCE IN TIME: " + diffTime);

  // Time apart (remainder)
  var tRemainder = diffTime % frequency;
  console.log(tRemainder);

  // Mins until train
  var tMinutesTillTrain = frequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

  // Next train
  var nextTrain = moment()
    .add(tMinutesTillTrain, "minutes")
    .format("hh:mm");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

  $("#trainTable > tbody").append(
    "<tr><td>" +
      trainName +
      "</td><td>" +
      destination +
      "</td><td>" +
      frequency +
      "</td><td>" +
      nextTrain +
      "</td><td>" +
      tMinutesTillTrain +
      "</td></tr>"
  );
});
