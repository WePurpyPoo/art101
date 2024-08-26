// AJAX
// Author: Joey Longo & Chase Croy-Perrett
// Date: 1 Dec 2023

function doajax2(id){
    ENDPOINT = "https://pokeapi.co/api/v2/pokemon/" + id + "/"
    console.log(ENDPOINT)
    $.ajax({
        url: ENDPOINT,
        data: {
        },
        type: "GET",
        dataType: "json",
        success: function(data){
            console.log(data)
            pokemon = data.name;
            pokemon = pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
            $("#output").html(pokemon)
            pokemonimg='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + id +'.png'
            pokemonimg="<img src=" + pokemonimg + " height=200>"
            console.log(pokemonimg)
            $("#outputimg").html(pokemonimg)
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        }
      })
    
}

$("#my-button").click(function(){
    var id = Math.floor(Math.random() * (1017 - 1))+ 1; 
    var text = doajax2(id)
    $("#output").html(text);
})
