function searchRecipe(recipe) {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $(".recipe-search-results").empty()

        console.log(response)

        for (recipes in response.meals) {
            // console.log(response.meals[recipes])
            var cardBody = ($("<div class='card searchrec' id ='recipecard' style='width: 30rem;'><div class='card-body searchbody'> </div></div>"));

            var recipeTitle = ($("<div class = card-title resultrecipe>" + response.meals[recipes].strMeal + "</div>"))
            var recipeIngTitle = ($("<div class = card-title recipeingred>" + "Ingredients" + "</div>"))

            cardBody.append(recipeTitle)
            cardBody.append(recipeIngTitle)
            $(".recipe-search-results").append(cardBody)


            var ingredients = {}
            for (i = 1; i < 21; i++) {
                var ingredient = ("strIngredient" + [i])
                var measure = ("strMeasure" + [i])

                if (response.meals[recipes][ingredient] != "") {
                    ingredients[response.meals[recipes][ingredient]] = response.meals[recipes][measure]
                }

            }
            console.log(ingredients)

            //     console.log(response.meals[recipes][ingredient])}
            // console.log(response.meals[recipes].measure)

            // console.log(response.meals[recipes] + ingredient)}

            var array = Object.entries(ingredients)

            for (var [eachingredient, eachquantity] of array){
                console.log(eachingredient + "and" + eachquantity)
                cardBody.append($("<p class = card-text recipeingredient>" + eachingredient + " " + eachquantity + "</div>"))

            }

            // const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
            //     return(key,value)
            //   })
              
            // console.log(keyValue(ingredients))
            //   cardBody.append($("<p class = card-text recipeingredient>" + "Recipe Ingredients : " +keyValue(ingredients) + "</div>"))


            // for (var [eachingredient,eachquantity] in ingredients){
            //     console.log(eachingredient + "and" + eachquantity)
            // }

            var recipeInstructions = ($("<p class = card-text recipeinstructions>" + "Recipe Instructions : " + response.meals[recipes].strInstructions + "</div>"))

            var recipeLink = ($("<a href = '" + response.meals[recipes].strSource + "'" + "class = card-link recipesource>" + "Link to Recipe" + "</a>"))
            var recipeVideo = ($("<a href = '" + response.meals[recipes].strYoutube + "'" + "class = card-link recipesource>" + "Recipe Video" + "</a>"))

            var saveBtn = ($("<button type='button' class = card-text recipevideo>" + "Save Recipe to Favorites" + "</button>"))

            cardBody.append(recipeInstructions).append(recipeLink).append(recipeVideo).append(saveBtn)

            $(".recipe-search-results").append(cardBody)
        };

    })
}

$(document).ready(function () {

    $(".recipe-search-button").on("click", function (event) {
        event.preventDefault();
        searchRecipe($(".searchInput").val());
    })
});