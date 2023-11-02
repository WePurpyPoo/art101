// Creating Functions
// Author: Joey Longo & Chase Croy-Perrett
// Date: 2 Nov 2023

function sortname() {
    //asking for the users name
    var userName = window.prompt("Enter your name")
    //making the name lowercase so it sorts properly
    var userName = userName.toLowerCase();
    console.log("userName =", userName);
    //splitting the name into an array then printing
    var splitArray = userName.split('');
    console.log("splitArray =", splitArray);
    //sorting the array then printing
    var sortedArray = splitArray.sort();
    console.log("sortedArray =", sortedArray);
    //turn the array back into a string then printing
    var sortedName = sortedArray.join('');
    console.log("sortedName =", sortedName);
    //return the sorted name 
    return sortedName;
    //code taken from Wes Modes
}

name = sortname();
document.writeln("Here's your name spelled very correctly: ", name, "</br>"); 
