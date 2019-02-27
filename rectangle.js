$(function(){
  console.log(0)
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#calculate'),
      $perimenter=$('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    var w=Number($width.val());
    var h=Number($height.val());
console.log(w,h);
    var p=(w+h)*2,
        a=w*h;

  $perimeter.val(p);
  $area.val(a);
  })
})
