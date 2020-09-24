$(document).ready(function() {
    var key = "AIzaSyA-2N_iTiqbNcDh3UJu6Jk6-kBZPRAFBag";
    var video = "";


    $("form").submit(function(event) {
        event.preventDefault();

        var search = $("#search").val();

        videoSearch(key, search, 10);
    })

    function videoSearch(key, search, maxResults) {

        $("#videos").empty();

        $.ajax({
            url: "//www.googleapis.com/youtube/v3/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,
            method: "GET",
        }).then(function(response) {
            console.log(response);
            // for (i = 0; i < response.items.length; i++){
            response.items.forEach(item => {
                video = `
                    <iframe width="420" height="315" src=//www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowFullScreen></iframe>
                `
                $("#videos").append(video);
                }
            )
        })
    }
    
});