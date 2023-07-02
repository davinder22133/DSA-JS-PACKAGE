function bubbleSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        // Compare adjacent elements and swap if necessary
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
  
    return array;
  }
  

module.exports=bubbleSort;
  