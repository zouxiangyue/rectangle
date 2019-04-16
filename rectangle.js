$(function() {
  var $width = $('#width');
  var $height = $('#height');
  var $btnCal = $('#calculate');
  var $perimeter = $('#perimeter');
  var    $area = $('#area');

  var    $widthValidation=$('#width-validation');
  var    $heightValidation=$('#height-validation');
  var span=$('span')
  
  $width.keypress(function(e){
        validStr(e); 
        if(e.target.value==''){
            span[0].className='span1';
        }else{
          span[0].className='span2'
        }    
  })
  $height.keypress((e)=>{
       console.log(e.target.value)
        validStr(e);
        if(e.target.value==''){
             span[1].className='span1';      
        }else{
            span[1].className='span2'
        } 
          
  });
  $width.focus((e)=>{
    console.log(e.target.value)
    if(e.target.value===''){
      span[0].className='span1';
    }else{
      span[0].className='span2'
    }
  })
  $height.focus((e)=>{
    if(e.target.value===''){
          span[1].className='span1';    
    }else{
      span[1].className='span2'
    }                 
  })  
  $btnCal.click(function(){
    var w = $width.val();
    var h = $height.val();
    var r = new Rectangle(w, h);

    $perimeter.val(r.perimeter());
    $area.val(r.area());
              
  });

});
