
var a;
const state = {
  page : 1,
  lastPage:false,
  sizee: 1
};


const searchFlicker = function(term) {



  if (state.lastPage) {return;}
  state.requestInProgess = true;
  console.log('Searching Images for', term);
  const ticketURL = 'https://app.ticketmaster.com/discovery/v2/events.json?';
  // const ticketURL = 'https://app.ticketmaster.com/discovery/v2/events/0B004F0401BD55E5/images.json?';
  //
  $.getJSON(ticketURL, {
    apikey:'NmoblojWvgRO5hjMSP57oTO9IGMbFZsA',
    city:term,
    // number: state.sizee++,
    page:state.sizee++,
  }).done(function(r){
    console.log(r);
    if(r.page = r.totalPages)
    {
    state.lastPage = true;
    }
  }).done(showImages)

};

const showImages = function(results) {
  a= results;
//   const generateURL = function(p) {
//     return[
//
//     id: "39576158200", owner: "139632101@N03", secret: "c14b6be26d", server: "872", farm: 1, …
//   '  http://farm1.static.flickr.com/872/39576158200_c14b6be26d_q.jpg'
//
//     {ratio: "3_2", width: 640, height: 427, fallback: false, …}
// '    https://s1.ticketm.net/dam/a/a4d/e64c62da-cb1f-4eee-b878-ee65c82c4a4d_620161_ARTIST_PAGE_3_2.jpg'
//
//
//       'http://s1',
//     p.s1,
//     '.ticketm.net/dam/a/',
//     p.server,
//     '/',
//     p.id,
//     '_',
//     p.ratio,
//     `_3_2.jpg`
//
//
//     //   'http://farm',
//     // p.farm,
//     // '.static.flickr.com/',
//     // p.server,
//     // '/',
//     // p.id,
//     // '_',
//     // p.secret,
//     // `_${size}.jpg`
//
//
//      //chnage q to omething else for difff sezes
//     ].join('');
//   }

// for each photos
  results._embedded.events.forEach(function(photo) {
    const thumbnailURL =  photo.images[2].url; //generateURL(photo.images[2].url); //
    const thumbnailURL1 =  photo.url; //generateURL(photo.images[2].url); //
// debugger;
    const dateEvent =  photo.dates.start.localDate; //generateURL(photo.images[2].url); //
    const timeEvent =  photo.dates.start.localTime;
    const infoEvent =  photo.info;
    const noteEvent =  photo.pleaseNote;
    let PriceRange ="";
    if (photo.priceRanges) {
      const maxPriceEvent =  photo.priceRanges[0].max;
      const minPriceEvent =  photo.priceRanges[0].min;
      const CurrEvent =  photo.priceRanges[0].currency;
       PriceRange = CurrEvent +" "+ minPriceEvent + "-" + maxPriceEvent;
    }


    // const PriceRange=""
    // a._embedded.events[0].images[0].url
    // console.log(dateEvent);
    // const $img = $('<img />', {src: thumbnailURL}); //.attr('src',thumbnailURL)
    // const $p = $('<p />');
    const $div = $('<div />');
    // $p.text (photo.name)
    // console.log($p);
    // $div.html($p);
    $div.html(`<p>${photo.name} on ${dateEvent} at ${timeEvent}</p> <p>${PriceRange} </p><p>${infoEvent} </p> <p>${noteEvent} </p><img src="${thumbnailURL}"/>`),

    // const $p = (photo) //.attr('src',thumbnailURL)
    $('#images').append($div);

    $div.on('click',function(){ // event delegation
      console.log('clicked');
      // let imglnk = $img.src
      // window.open(imglnk);
      window.open(thumbnailURL1);
      // window.open(generateURL(photo, 'b'));
    })

    // console.log($p.name);
    // $p.name.)appendTo('#images');
    // $('#textimg').append($p);
    $('#images').append($div);
  });

};

$(document).ready(function(){
  $('#search').on('submit',function(event){
    event.preventDefault();
    const query = $('#query').val();
    state.lastPage = false;
    state.page =1;
    $('#images').empty();
    searchFlicker( query )
  });

  const throttledSearchFlickr = _.throttle( searchFlicker,250,{trailing: false});

  $(window).on('scroll',function(){
    const documentHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollTop = $(document).scrollTop();
    const scrollBottom = documentHeight - (windowHeight + scrollTop);
    if (scrollBottom < 500) {

      const query = $('#query').val();
      // searchFlicker( query ); // Don't make too many requests : throttle
    throttledSearchFlickr( query ); // Don't make too many requests : throttle


    }
  });
});
