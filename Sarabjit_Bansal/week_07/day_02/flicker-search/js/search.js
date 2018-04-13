// console.log('working',$.fn.jquery);
var i =1;
let result = false;
const searchFlicker = function(term) {


  // We havent used jasoncallback yet
  // this is not AJAX
  if (result === true) {
    return;
  }
  console.log('Searching Flickr for', term);
  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key:'2f5ac274ecfac5a455f38745704ad084',
    text: term,
    format:'json',
    page:i
  }).done(showImages);

};

const showImages = function(results) {
  const generateURL = function(p) {
    return[
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' //chnage q to omething else for difff sezes
    ].join('');
  }
  // console.log(results);
  // debugger;
  if (results.photos.page === results.photos.pages) {result = true;}
// for each photos
  results.photos.photo.forEach(function(photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); //.attr('src',thumbnailURL)
    // $('#images').append($img);
    $img.appendTo('#images');
  });
//generate a URL
// create an image for that URL
//diplay image
};

$(document).ready(function(){
  $('#search').on('submit',function(event){
    // $('#images').html('');
    $('#images').empty();
    event.preventDefault();

    const query = $('#query').val();
    searchFlicker( query )
  });

  $(window).on('scroll',_.throttle(function(){
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();
    const scrollBottom = documentHeight - (windowHeight + scrollTop);
    if (scrollBottom < 500) {

      const query = $('#query').val();
      console.log(query);

      i++;
      searchFlicker( query ); // Don't make too many requests : throttle
    }
  },250));
});

  // $("img").click( function() {
  // console.log('clicked');
  // let imglnk = $('img').src
  //   $(window).open(imglnk);
});
/*
TODO:

throttle the requests
pagination --- eventually we should see al possible matching results
stop at the end - no more requets

bonus:
click on photo and take you at teh original page
new search removes the previos content
website look nicer

underscore.js

*/
