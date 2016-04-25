describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]]);
    expect(split([3,2,5,6,9])).toEqual([[3,2],[5,6,9]])
  });
});

describe('Merge Sort', function(){
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('is able to merge two sorted arrays into one sorted array', function(){
   // test the merging algorithm
   expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
 });

  it ('handles a two element array', function(){
    expect( mergeSort([2,1])).toEqual([1,2]);
  });

  it ('handles a bigger array', function(){
    expect( mergeSort([2,1,7,9,3,10])).toEqual([1,2,3,7,9,10]);
  });

  it('handles a odd length array', function () {
    expect(mergeSort([5,6,2,9,12,4,8])).toEqual([2,4,5,6,8,9,12])
  })

  it ('handles duplicates', function(){
    expect( mergeSort([2,1,2,7])).toEqual([1,2,2,7]);
  });

});
