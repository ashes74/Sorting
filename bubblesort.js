function bubbleSort(array) {
  var n = array.length;

  var switches =1;
  while (switches){
    switches = 0;
    for(var i=1; i < n; i++) {
      if (array[i-1] > array[i]) {
        swap(array, i-1, i)
        switches++;
      }

    }
    n--;
  }
  return array;

}

function swap(array, elem1, elem2) {
  var temp = array[elem1];
  array[elem1] = array[elem2];
  array[elem2] = temp;

}
