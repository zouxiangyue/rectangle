function Rectangle(width, height) {
  var w = Number(width);
  var h = Number(height);
  this.area = function() {
          return w * h;
            
    };

    this.perimeter = function() {
          return 2 * (w + h);
            
    };

}

function validStr(e){
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(e.key)){
      e.preventDefault()            
  }
  if(e.key==='.'){
         if(e.target.value==='')e.preventDefault();
         if(e.target.value.indexOf('.',0)!=-1){
              e.preventDefault();                  
         }else{
              if(e.target.selectionStart===0){
                   e.preventDefault();
              }
          }
  }
}
