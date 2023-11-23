// Conditionals
// Author: Joey Longo & Chase Croy-Perrett
// Date: 22 Nov 2023

function sortingHat(name) {
    //sorting the user into a house based on the remainder of the length of their name divided by 4
    var length = name.length
    remainder = length % 4
    if (remainder == 0) {
        house = "Griffindor"
    }
    else if (remainder == 1) {
        house = "Ravenclaw"
    }
    else if (remainder == 2) {
        house = "Hufflepuff"
    }
    else {
        house = "Slytherin"
    }
    return house
}

$("#my-button").click(function(){
    var name = $("#input").val()
    console.log("woah" + name)
    var sortedHat = sortingHat(name)
    console.log("woah" + sortedHat)
    text = "<p> The Sorting Hat has sorted you into " + sortedHat + "</p>"
    document.getElementById("output").innerHTML = text
})
