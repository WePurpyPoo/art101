// Creating Objects and Arrays
// Author: Joey Longo & Chase Croy-Perrett
// Date: 27 Oct 2023

// My Variables (ways of getting around)
var myTransport = [
    "bus ",
    "car ",
    "plane ",
    "shoes ",
    "scooter ",
];

//My Object (My Mom's Car)
var myMainRide = {
   make: "Honda" , 
   model: "Civic", 
   color: "Maroon", 
   year: 2001, 
   age: function() {
      return 2023 - this.year;
   }
};

//Writes statistics of car and transport to webpage
$("#output").append("<p>These are the pieces of equipment I use to get around! They are: " + myTransport + "</br></p>");
document.writeln("My Swiggity-swoogity Main Ride:",
JSON.stringify(myMainRide, null, '\t'));
$("#honda").html("<p>The car isn't mine, it's main man Lego Yoda's. A college student couldn't afford this!</p>")

