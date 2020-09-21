// Recipe API's 
// https://developer.edamam.com/
// http://www.recipepuppy.com/about/api/
// https://www.themealdb.com/api.php
$(".overlay-div").mouseover( function(){
    $(this.parentNode.querySelector("img")).addClass("navigation-hover");

})

$(".overlay-div").mouseout( function(){
    $(this.parentNode.querySelector("img")).removeClass("navigation-hover");
})

$(".youtube-search").on("click", function (){
    window.location.href = 'video_page.html';
})

$(".shopping-list").on("click", function (){
    window.location.href = 'shopping_list.html';
})

$(".favorite-recipe-list").on("click", function (){
    // window.location.href = '';
})


$(".recipe-search").on("click", function (){
    window.location.href = 'search_recipes.html';
})



