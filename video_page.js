$(document).ready(function() {
    var key = "AIzaSyB2ovQlkra_1Da0lFRFXlzyVbQyohH1KDU";
    var video = "";


    $("form").submit(function(event) {
        event.preventDefault();

        var search = $("#search").val();

        videoSearch(key, search, 10);
    })

    function videoSearch(key, search, maxResults) {

        $("#videos").empty();

        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,
            method: "GET",
        }).then(function(response) {
            console.log(response);
            // for (i = 0; i < response.items.length; i++){
            response.items.forEach(item => {
                video = `
                    <iframe width="420" height="315" src=http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowFullScreen></iframe>
                `
                $("#videos").append(video);
                }
            )
        })
    }
    
});