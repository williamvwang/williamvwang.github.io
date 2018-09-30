$(function() {

  $('#job').mouseenter(_.throttle(function() {
    $('#job-details').show(200);
  }, 450));

  $('#job').mouseleave(_.throttle(function() {
    $('#job-details').hide(200);
  }, 450));

});