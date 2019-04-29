/*
Game JS for Clicker Game Template
by Mike Henry (mikeshenry@gmail.com)

Available from https://github.com/mashmac2/clicker-game-template

You have permission to reuse this code for non-commercial purposes with attribution

*/
//object for our game items
var items = {};
items.topic = "";
items.clicks = 0;
items.blah = 0;
items.autoclicker = 0;
items.grandma = 0;
items.farm = 0;
items.mine = 0;
items.factory = 0;

//on page load, this runs one time.
$(document).ready(function(){
  // localstorage
  if (typeof(Storage) !== "undefined") {
  	// Code for localStorage
  	console.log("Viskas gerai");

  	if (localStorage.topic) {
  	  //already exists, second loading of the game
      $('#content p').show();
  	  $('#clicker').show();

  		//Retrieve all variables
  		items.topic = localStorage.topic;
  		items.clicks = localStorage.clicks;
		items.blah = localStorage.blah;
		items.autoclicker = localStorage.autoclicker;
    items.grandma = localStorage.grandma;
    items.farm = localStorage.farm;
    items.mine = localStorage.mine;
    items.factory = localStorage.factory;

  	} else {
  		// first loading of the game

  		// prompt for topic of your thesis
  		var topic = prompt("First, you need to name your button. What is your button's name?",'');
  		localStorage.setItem("topic", topic);
  		items.topic = topic;
  		$('#topic').text("Your button's name is " + items.topic).show();

		  //fade in messages
  		$('#content .one').delay(1000).fadeIn(1000);
  		$('#clicker').delay(2000).fadeIn(1000);

  	}
  	      // Put variables into the page
  	  $('#topic').text("Your button's name is " + items.topic);
  	  $('#clicks-status').text(items.clicks);
	  $("#autoclicker-status").text(items.autoclicker);
    $('#grandma-status').text(items.grandma);
    $('#farm-status').text(items.farm);
    $('#mine-status').text(items.mine);
    $('#factory-status').text(items.factory);

	  //add blah and loading

  } else {
    // Sorry! No Web Storage support..
    console.log("No localStorage support!");
  }
  //end localstorage
});

//Game functions; these run when buttons are clicked, or when they're used in the document.ready or window.setInterval sections
function increment(item){
  var current_clicks = '#' + item.name + "-status";

  //use item.name to refer to an item in the items array
  items[item.name] = Number(items[item.name]) + 1;

  //update the text on page with the new quantity
  $(current_clicks).text(items[item.name]);
}

function blahButton(){
	//for clicking on the blah button
}

function autoclickerButton(){
	//for clicking on the buy autoclicker button
	console.log("autoclickerbutton");
	if(items.clicks > 20){
	items.autoclicker += 1;
	items.clicks -= 20;
	$("#autoclicker-status").text(items.autoclicker);
	$("#clicks-status").text(items.clicks);
	}
}
function grandmaButton(){
	//for clicking on the buy autoclicker button
	console.log("grandmabutton");
	if(items.clicks > 100){
	items.grandma += 1;
	items.clicks -= 100;
	$("#grandma-status").text(items.grandma);
	$("#clicks-status").text(items.clicks);
	}
}
function farmButton(){
	//for clicking on the buy autoclicker button
	console.log("farmbutton");
	if(items.clicks >2000){
	items.farm += 1;
	items.clicks -= 2000;
	$("#farm-status").text(items.farm);
	$("#clicks-status").text(items.clicks);
	}
}

function mineButton(){
	//for clicking on the buy autoclicker button
	console.log("minebutton");
	if(items.clicks > 10000){
	items.mine += 1;
	items.clicks -= 10000;
	$("#mine-status").text(items.mine);
	$("#clicks-status").text(items.clicks);
	}
}

function factoryButton(){
	//for clicking on the buy autoclicker button
	console.log("factorybutton");
	if(items.clicks > 25000){
	items.factory += 1;
	items.clicks -= 25000;
	$("#factory-status").text(items.factory);
	$("#clicks-status").text(items.clicks);
	}
}

function save(){
  localStorage.setItem("clicks", items.clicks);
  localStorage.setItem("blah", items.blah);
  localStorage.setItem("autoclicker", items.autoclicker);
  localStorage.setItem("grandma", items.grandma);
  localStorage.setItem("farm", items.farm);
  localStorage.setItem("mine", items.mine);
  localStorage.setItem("factory", items.factory);
  console.log("Saving");

  $('#saving-status-2').fadeIn(500).delay(4000).fadeOut(500);
}

  //game loop; this runs every ten seconds to do things in the game
window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the save loop");

  	save();
}, 10000); //updates once per second (1000 milliseconds)

window.setInterval(function(){

    //You would add things here to check for new things to do, probably; all of the 'events' in your game would be triggered here
    console.log("In the game loop");
	//check if num of clicks is greater than 20; show autoclicker
	//if(items.clicks > 20){
	//	$("#autoclickers").fadeIn(1000);
	//}


	//autoclickers
	if(items.autoclicker > 0){
		items.clicks += (1*items.autoclicker);
	}
	if(items.grandma > 0){
		items.clicks += (5*items.grandma);
	}
  if(items.farm > 0){
		items.clicks += (25*items.farm);
	}
  if(items.mine > 0){
		items.clicks += (50*items.mine);
	}
  if(items.factory > 0){
		items.clicks += (100*items.factory);
	}
	$("#clicks-status").text(items.clicks);

}, 1000); //updates once per second (1000 milliseconds)
