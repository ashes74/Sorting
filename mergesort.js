function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  var firstHalf = wholeArray.slice(0, wholeArray.length/2),
  secondHalf = wholeArray.slice(wholeArray.length/2);
  console.log("firstHalf:", firstHalf , "secondHalf", secondHalf);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
    //while firstHalf and secondHalf
    //compare the first element of the firstHalf to the first element of the secondHalf
    //add the smaller of the two to the wholeArray
    var wholeArray = [];
    while(firstHalf.length>0 && secondHalf.length>0){
      if (firstHalf[0]<secondHalf[0]) {
        wholeArray.push(firstHalf.shift());
      }else{
        wholeArray.push(secondHalf.shift());
      }
    }

  return wholeArray.concat(firstHalf).concat(secondHalf);
}


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  var split_array = split(array);
  var firstHalf = mergeSort(split_array[0]);
  var secondHalf = mergeSort(split_array[1]);
  return merge(firstHalf, secondHalf);
}
