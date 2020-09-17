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

console.log($(".card-img-overlay"))