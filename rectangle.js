$(function() {
  var $width = $('#width');
  var $height = $('#height');
  var $btnCal = $('#calculate');
  var $perimeter = $('#perimeter');
  var    $area = $('#area');
  var    $widthValidation=$('#width-validation');
  var    $heightValidation=$('#height-validation');

$btnCal.click(function(){
    var w=$width.val();
    var h=$height.val();
    var result1= valid(w),
        result2=valid(h);
    if(!result1.isOk){
      $widthValidation.html('宽度'+result1.reason);
      $width.focus();
    }else{
      $widthValidation.html('')
    }
    if(!result2.isOk){
      $heightValidation.html('高度'+result2.reason);
      $height.focus();
    }else{
      $heightValidation.html('');
    }
    if(!valid(w).isOk || !valid(h).isOk){
      $perimeter.val('');
      $area.val('');
      return;
    }
    var r = new Rectangle(w, h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
  });
});
