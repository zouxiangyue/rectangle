var area=require('../area.js');
var perimeter=require('../perimeter.js')

var expect=require('../chai').expect;

describe('矩形计算器测试',function(){
  it('2*(2+3)',function(){
        expect(perimeter(2,3)).to.be.equal(12);
          
  });

  it('p:1,4',function(){
        expect(perimeter(1,4)).to.be.equal(10);
          
  });
  it('a:2,3',function(){
        expect(area(2,3)).to.be.equal(6);
          
  })
  it('a:1,4',function(){
        expect(area(1,4)).to.be.equal(4);
          
  })  

});

