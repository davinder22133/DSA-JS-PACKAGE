function quickSort(array) {
    if (array.length <= 1) {
      return array; // Base case: If the array has 0 or 1 element, it is already sorted
    }
  
    const pivot = array[array.length - 1]; // Choose the last element as the pivot
    const left = [];
    const right = [];
  
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]); // Elements smaller than the pivot go to the left array
      } else {
        right.push(array[i]); // Elements greater than or equal to the pivot go to the right array
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)]; // Recursively sort the left and right arrays
  }
  

module.exports=quickSort;
  