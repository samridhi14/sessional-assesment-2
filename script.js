var template = '<div class="card shadow-sm">        <img src="" />   <div><span class="album-title" ></span></div>   </div>';
var albumnData = null;

$.get('https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09', function(data){

    albumnData = data;
    populateAlbum();
});

function populateAlbum(){
    $('main .album .card-div').html("");
    var albumId = -1;
    for(var i=0; i<albumnData.length;i++){
        var image = albumnData[i];
        if(image.albumId != albumId){
            var $temp = $(template);
            $temp.find('img').attr('src', image.thumbnailUrl);
            $temp.find('.album-title').text("Album "+(albumId+1))
            $('main .album .card-div').append($temp);
            albumId = image.albumId;
        }
    }

}