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

function valid(value){
  var result={
    isOk:false,
    reason:''
  }
  if(value===''){
    result.reason='不能为空！';
    return result;
  }else if(value<=0){
    result.reason='不能为非正数字！';
    return result;
  }else if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(value)){
    result.reason="不能为非法数字！";
    return result;
  }else{
    result.isOk=true;
    return result;
  }

}
