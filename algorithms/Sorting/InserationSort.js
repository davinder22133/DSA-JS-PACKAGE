function insertionSort(array) {
    const length = array.length;
  
    for (let i = 1; i < length; i++) {
      const key = array[i];
      let j = i - 1;
  
      // Move elements greater than the key to the right
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        j--;
      }
  
      // Place the key in its correct position
      array[j + 1] = key;
    }
  
    return array;
  }
  
module.exports=insertionSort;