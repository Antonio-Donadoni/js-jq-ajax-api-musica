
function getAlbums() {

  $.ajax ({
   url : 'https://flynn.boolean.careers/exercises/api/array/music',
   method : 'GET',
   success : function(data, state) {

     var success = data['success'];
     var arr = data['response'];

     if (success) {
        for (var i = 0; i < arr.length; i++) {

          var album = arr[i];
          var title = album["title"];
          var author = album["author"];
          var genre = album["genre"];
          var year = album["year"];
          var poster = album["poster"];


          var template = $('#album-template').html();
          var compiled = Handlebars.compile(template);
          var target = $('.cds-container');
          var albumHTML = compiled({
           'poster': poster,
           'title': title,
           'author': author,
           'year' : year,
           'genre': genre
          });

          target.append(albumHTML);
        }

         }

     else {
       console.log(error);
     }
   },
   error: function(request, state, error) {
     console.log('request' , request);
     console.log('state' , state);
     console.log('error' , error);
   }


 });
};



function init() {

getAlbums();
}

$( document ).ready(init);
