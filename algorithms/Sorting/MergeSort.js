function mergeSort(array) {
    if (array.length <= 1) {
      return array; // Base case: If the array has 0 or 1 element, it is already sorted
    }
  
    // Divide the array into two halves
    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0, middle);
    const rightHalf = array.slice(middle);
  
    // Recursively sort the left and right halves
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
  }
  
  function merge(left, right) {
    let mergedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from left and right halves and add them to the merged array in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        mergedArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        mergedArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Add any remaining elements from the left or right halves
    while (leftIndex < left.length) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  
    return mergedArray;
  }
  
  module.exports=mergeSort;