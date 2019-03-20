$(function() {
  var $width = $('#width');
  var $height = $('#height');
  var $btnCal = $('#calculate');
  var $perimeter = $('#perimeter');
  var    $area = $('#area');

  $btnCal.click(function(){
    var w = $width.val();
    var h = $height.val();
    var r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
  });

});
