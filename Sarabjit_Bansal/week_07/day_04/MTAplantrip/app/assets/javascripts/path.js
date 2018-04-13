
// $(document).ready(function(){
//
//   // setInterval(function(){
//
//     $.getJSON('/info').done(function(info){
//       $('#plannedtrip').text( info.plannedtrip );
//     });
//
//
//   // },4000);
//
//
//
// });
$(document).ready(function () {
  $('form').on('submit', function (event){
    event.preventDefault();
    const fromstation = $('#fromstation').val()
    const tostation = $('#tostation').val()
    $.getJSON('/pages/info',{fromstation,tostation}).done(function(info){
      $('#plannedtrip').text( info.plannedtrip );
    });
  })
})
