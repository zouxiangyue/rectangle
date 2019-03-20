function Rectangle(width, height) {
  var w = Number(width);
  var h = Number(height);
  this.area = function(w,h) {
          return w * h;
            
    };

    this.perimeter = function(w,h) {
          return 2 * (w + h);
            
    };

}
