$(document).ready(function() {
    $("#search-video").on("click", function(){
        event.preventDefault();

        // Here we grab the text from the input box
        var video = $("#video-input").val();

        // Here we construct our URL
        var queryURL = "https://www.youtube.com/embed?listType=search&list=" + video + "&appid=acf348ebcd0d43c83beaf5c573f26468"; 

        console.log(queryURL)
    })
});