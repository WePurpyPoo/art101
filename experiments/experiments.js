
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

  // ENDPOINT = "https://xkcd.com/info.0.json";
  // APIKEY = ""
  
  // // add button event listener
  // $("#get-em").click(function(){
    
  //   // construct ajax object
  //   const ajaxParams = {
  //     url: ENDPOINT,
  //     data: {api_key:APIKEY},
  //     type: "GET",
  //     dataType: "json",
  //       success: ajaxSuccess,
  //       error: ajaxError
  //   }
  //     $.ajax(ajaxParams)
  // })
  
  // function ajaxSuccess(data){
  //     console.log("Here's what I got:", data)
  //       const title = data.title;
  //       const desc = data.explanation;
  //       const imageURL = data.url;
  //       $("#output").append("<h2>" + title + "</h2>");
  //       $("#output").append("<p>" + desc + "</p>");
  //       $("#output").append("<img src='" + imageURL + "' width=200 />");
        
  // }
  
  // function ajaxError(request,error){
  //     console.log("Oops:", request, error)
  // }

  ENDPOINT = "https://8768zwfurd.execute-api.us-east-1.amazonaws.com/v1/compliments";
  
  // add button event listener
  $("#get-em").click(function(){
    
    // construct ajax object
    const ajaxParams = {
      url: ENDPOINT,
      data: {},
      type: "GET",
      dataType: "json",
        success: ajaxSuccess,
        error: ajaxError
    }
      $.ajax(ajaxParams)
  })
  
  function ajaxSuccess(data){
      console.log("Here's what I got:", data)
        $("#output").append("<h2>" + data + "</h2>");
        
  }
  
  function ajaxError(request,error){
      console.log("Oops:", request, error)
  }