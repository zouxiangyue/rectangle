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
