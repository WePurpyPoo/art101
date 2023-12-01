// Creating Functions
// Author: Joey Longo & Chase Croy-Perrett
// Date: 2 Nov 2023

function sortname(name) {
    //making the name lowercase so it sorts properly
    var userName = name.toLowerCase();
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

function generateAnagram(word) {
    // Convert the word to an array of characters
    const characters = word.split('');
  
    // Shuffle the array of characters
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  
    // Join the shuffled characters back into a string
    const anagram = characters.join('');
  
    return anagram;
  }
  //help from ChatGPT

$("#my-button").click(function(){
    var name = $("#input").val()
    console.log(name)
    var anagram = generateAnagram(name)
    console.log(anagram)
    var sortnamed = sortname(name)
    $(".name").html(anagram);
    $("#output").html("<p>Here's your name spelled very correctly: " + sortnamed + "</br></p>"); 
})