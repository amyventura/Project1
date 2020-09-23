// make a new function to parse everything in local storage and only put into-
//my array values for keys that start with recipe
// have exactly 5 digits after recipe 
$(document).ready(function () {
function myParser(recipeKey){

    if (recipeKey.length==11 && !isNaN(recipeKey.substr(6,5))&& recipeKey.substr(0,6)=="recipe"){
      return true
    }return false
}
var myFavoriteRecipes=[]; 
var myKeys = Object.keys({...localStorage});
console.log(myKeys)
    function allStorage() { 
        var i=myKeys.length
        while ( i-- ) {
            if (myParser(myKeys[i])){
                myFavoriteRecipes.push( localStorage.getItem(myKeys[i]) );
            }
        console.log(i)  
        }
    }


    function showRecipe(initialRecipes) {
        $(".recipe-search-results").empty()
        var response= JSON.parse(initialRecipes)

            var cardBody = ($("<div class='card searchrec' id ='recipecard'><div class='card-body searchbody'> </div></div>"));
            
            var recipeTitle = ($("<div class = 'card-title resultrecipe'>" + "<b>" +response.strMeal +"</b>" +"</div>"))

            var recipeIngTitle = ($("<ul class='list-group list-group-flush;'>" +"<b>" +"Ingredients" + "</b>" +"</ul>"))

            cardBody.append(recipeTitle)
            cardBody.append(recipeIngTitle)
            $(".favorite-recipes").append(cardBody)


            var ingredients = {}
            for (j = 1; j < 21; j++) {
                var ingredient = ("strIngredient" + [j])
                var measure = ("strMeasure" + [j])

                if (response[ingredient] != "") {
                    console.log("hi")
                    ingredients[response[ingredient]] = response[measure]
                }

            }
            var array = Object.entries(ingredients)

            console.log(ingredients)

            for (var [eachingredient, eachquantity] of array){
                recipeIngTitle.append($("<li class='list-group-item'>" +"<b>" +eachingredient + "</b>" +" - " + eachquantity + "</li>"))
            }
            var recipeInstructions = ($("<p class = 'card-text recipeinstructions'>" +"<b>" +"Recipe Instructions : " + "</b>"+response.strInstructions + "</div>"))

            var cardLinks = $("<div class='card-body links'>" + "</div>")
            var recipeLink = ($("<a href = '" + response.strSource + "'" + "class = 'card-link recipesource'>" + "Link to Recipe" + "</a>"))
            var recipeVideo = ($("<a href = '" + response.strYoutube + "'" + "class = 'card-link recipesource'>" + "Recipe Video" + "</a>"))
            cardLinks.append(recipeLink).append(recipeVideo)
            cardBody.append(recipeInstructions).append(cardLinks)
            $(".favorite-recipes").append(cardBody)
        };

    // }


   
    allStorage()
    showRecipe(myFavoriteRecipes);

});