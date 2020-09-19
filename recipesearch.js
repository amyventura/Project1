function searchRecipe(recipe) {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $(".recipe-search-results").empty()

        console.log(response.meals)
        var ingredients = {}

        for (recipes in response.meals){
            console.log(response.meals[recipes])
            $(".recipe-search-results").append($("<div class='card searchrec' id ='recipecard' style='width: 30rem;'><div class='card-body searchbody'> </div></div>"));

            $(".searchbody").append($("<div class = card-title resultrecipe>" + response.meals[recipes].strMeal + "</div>"))
            // for (i = 1; i < 21; i++){
            //     var ingredient = ("strIngredient" + [i])
            //     var measure = ("strMeasure" + [i])
                
            //     ingredients[ingredient] = measure

            //     console.log(measure)

            //     console.log(response.meals[recipes].measure)

                // console.log(response.meals[recipes] + ingredient)
            
            $(".searchbody").append($("<p class = card-text recipeinstructions>" + "Recipe Instructions : " +  response.meals[recipes].strInstructions + "</div>"))
            
            $(".searchbody").append($("<a href = '" +response.meals[recipes].strSource+ "'" + "class = card-link recipesource>" + "Link to Recipe" + "</a>"))
            $(".searchbody").agit sppend($("<a href = '" +response.meals[recipes].strYoutube + "'" + "class = card-link recipesource>" + "Recipe Video" + "</a>"))

            $(".searchbody").append($("<button type='button' class = card-text recipevideo>" + "Save Recipe to Favorites" + "</button>"))
        }
    });

}

$(document).ready(function () {

    $(".recipe-search-button").on("click", function (event) {
        event.preventDefault();
        searchRecipe($(".searchInput").val());
    })
});