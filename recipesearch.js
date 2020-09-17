function searchRecipe(recipe) {


    // Here we construct our URL
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $(".recipe-search-results").empty()

        console.log(response.meals)

        for (recipes in response.meals){

            $(".recipe-search-results").append($("<div class='card searchrec' id ='recipecard' style='width: 30rem;'><div class='card-body'> </div></div>"));

                
            $(".searchrec").append($("<div class = card-title resultrecipe>" + response.meals[recipes].strMeal + "</div>"))
            $(".searchrec").append($("<p class = card-text recipeinstructions>" + "Reecipe Instructions :" +  response.meals[recipes].strInstructions + "</div>"))
            $(".searchrec").append($("<p class = card-text recipesource>" + "Link to Recipe :" +  response.meals[recipes].strSource + "</div>"))
            $(".searchrec").append($("<p class = card-textt recipevideo>" + "Recipe Video :" +  response.meals[recipes].strYoutube + "</div>"))
        }
    });

}






$(document).ready(function () {

    $(".recipe-search-button").on("click", function (event) {
        event.preventDefault();
        searchRecipe($(".searchInput").val());
    })
});