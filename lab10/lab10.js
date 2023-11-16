// Manipulating DOMs
// Author: Joey Longo & Chase Croy-Perrett
// Date: 13 Nov 2023

function randomText() {
    const text = "“According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyways. Because bees don't care what humans think is impossible.” ";
    const min = 4;
    const max = 115;
    //randomizing the length of the generated text given the min and the max
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    
    // Generates text from the bee movie lawyer scene but if the
    // bee lawyer was having a seizure
    return text.slice(randStart, randStart + randLen);

}

var bee = true

//beeMovie function that appends the new text to the page
function beeMovie(){
    console.log("beemoive is being executed!");
    const newText = randomText();
    if (bee == true){;
        $("#output").append('<br><img src="https://cdn.discordapp.com/attachments/1158889284896575509/1174840486784151705/image.png?ex=65690e77&is=65569977&hm=310ff0ed4a35fccae2db94660ec0a0002d646d931a307915df3bca8e927c52c2&" width=100 height=100></img>');
        bee = false
    }
        else { 
        $("#output").append('<img src="https://cdn.discordapp.com/attachments/1158889284896575509/1174840487077756969/image.png?ex=65690e77&is=65569977&hm=a93dfd79509f090c658131c0771253db503495acb1603508c8642f1cc0472cf4&" width=100 height=100></img>');
        console.log("bee is false")
        bee = true
        }
    $("#output").append('<div class="dialogue"><p>' + newText + '</p> </div>');
}


function main(){
    $("#output").append(" <button id='make-convo' onclick = 'beeMovie()'>Click here to have an all-immersive bee movie experince! </button>");
}

main();

