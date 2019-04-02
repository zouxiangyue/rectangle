$(function() {
  var $width = $('#width');
  var $height = $('#height');
  var $btnCal = $('#calculate');
  var $perimeter = $('#perimeter');
  var    $area = $('#area');
  var    $widthValidation=$('#width-validation');
  var    $heightValidation=$('#height-validation');

  $width.blur(()=>{
    var w=$width.val();
    var result= valid(w);
    if(!result.isOk){
      $widthValidation.html('宽度'+result.reason);
      $width.focus();
    }else{
      $widthValidation.html('')
    }
  });
  $height.blur(()=>{
    var h=$height.val();
    var result=valid(h);
    if(!result.isOk){
      $heightValidation.html('高度'+result.reason);
      $height.focus();
    }else{
      $heightValidation.html('');
    }
  })
  $btnCal.click(function(){
    var w = $width.val();
    var h = $height.val();
    if(!valid(w).isOk || !valid(h).isOk){
      $perimeter.val('');
      $area.val('')
      return;
    }
    var r = new Rectangle(w, h);
    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
  });

});
