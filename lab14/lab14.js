// Loops
// Author: Joey Longo & Chase Croy-Perrett
// Date: 25 Nov 2023

function fizzBuzz(size) {
    //looping through 1-size given
    var string = "<br><br><div id='column'>";
    for (var i = 0;i<size;i++){

        var printstr = i + "";
        var printible = false;
        if((i % 3 == 0) || (i % 5 == 0) || (i % 7 == 0)){
            printible = true;
            printstr = printstr + " - "
        }
        if((i % 3 == 0)){
            printstr = printstr + "Fizz";
        }
        if(i % 5 == 0){
            printstr = printstr + "Buzz";
        }
        if(i % 7 == 0){
            printstr = printstr + "Boom";
        }
        if(printible == true){
            printstr = printstr + "!";
        }
        string = string + printstr  + "<br>";
    }
    string = string + "</div>";
    return string
}

$("#my-button").click(function(){
    var size = $("#input").val()
    var text = fizzBuzz(size)
    $("#output").html(text);
})
