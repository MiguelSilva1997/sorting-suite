var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(array) {
  for(var i = 0; i < array.length; i++) {
    var sorted = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > sorted) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = sorted;
  }
  return array;
}

console.log(insertionSort(array));
