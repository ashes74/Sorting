describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it ('handles a two element array', function(){
    expect( bubbleSort([2,1])).toEqual([1,2]);
  });

  it ('handles a bigger array', function(){
    expect( bubbleSort([2,1,7,9,3,10])).toEqual([1,2,3,7,9,10]);
  });

  it ('handles duplicates', function(){
    expect( bubbleSort([2,1,2,7])).toEqual([1,2,2,7]);
  });



});

xdescribe ('Bubble Sort efficiency', function(){


  xit ('stops when no more switches are necessary', function(){
    expect( bubbleSort([2,1,2,7])).toEqual([1,2,2,7]);
  });

})
