//creating a variable for the message list, message box, and send button

var messages = document.getElementById("messages");
var textBox = document.getElementById("textbox");
var button = document.getElementById("button");

// adding event listener to button and function
button.addEventListener("click", function () {
  //to create a new message with document . create ('li')
  var newMessage = document.createElement("li");

  //add text based on the text thats typed in (.Value)
  newMessage.innerHTML = textBox.value;

  //add new text with append to the old messages (the goal)
  messages.appendChild(newMessage);

  //this makes the box clear after send
  textBox.value = "";
});
