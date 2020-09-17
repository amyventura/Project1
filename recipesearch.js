
function searchRecipe(recipe){


        // Here we construct our URL
        var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe

        // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
        // and display it in the div with an id of movie-view

        // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
        });

}






$( document ).ready(function() {

    $(".recipe-search-button").on("click", function(event){
        event.preventDefault();
        searchRecipe($(".searchInput").val());
})});