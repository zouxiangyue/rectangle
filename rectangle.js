$(function() {
  var $width = $('#width');
  var $height = $('#height');
  var $btnCal = $('#calculate');
  var $perimeter = $('#perimeter');
  var    $area = $('#area');
  var    $widthValidation=$('#width-validation');
  var    $heightValidation=$('#height-validation');

  $width.keypress(function(e){
    validStr(e);
  })
  $height.keypress((e)=>{
    validStr(e);
  })
  $btnCal.click(function(){
    var w = $width.val();
    var h = $height.val();
    var r = new Rectangle(w, h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());       
  });
});
