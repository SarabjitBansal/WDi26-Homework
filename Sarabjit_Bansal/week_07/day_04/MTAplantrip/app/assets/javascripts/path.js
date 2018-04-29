
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
    $('#search1').css('background-color','#ccc');
    $('input:submit').attr('disabled', false);
    const fromstation = $('#fromstation').val()
    const tostation = $('#tostation').val()
    $.getJSON('/pages/info',{fromstation,tostation}).done(function(info){
      $('#plannedtrip').text( (info.plannedtrip));
      // console.log((info.plannedtrip).split(".").join("\n"));
    }).done( function() {
      // this doesn't work
        // $('#search1').attr('disabled', false);
        // $('input:submit').attr('disabled', false);

    });
  })

  $('select').on('change', function () {
    $('#search1').attr('disabled', false);
    $('#search1').css('background-color','blue');
    // $('input:submit').attr('disabled', false);
});

})
