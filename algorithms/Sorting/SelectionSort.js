function selectionSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the remaining unsorted portion of the array
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the minimum element with the current element
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
  
    return array;
  }

  module.exports=selectionSort;