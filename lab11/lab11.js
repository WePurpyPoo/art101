$("#my-button").click(function(){
    var name = $("#input").val()
    var sortedName = sortname(name)
    $("#title").html('Hello ' + sortedName + '!')
})

function sortname(userName) {
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