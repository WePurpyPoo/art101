
$("#my-button").click(function(){
    var name = prompt("Name Please:")
    $("#title").html('Hello ' + name + '!')
})


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