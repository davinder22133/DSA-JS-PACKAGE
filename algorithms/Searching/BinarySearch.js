function BinarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (array[mid] === target) {
        return mid; // Return the index of the target element if found
      } else if (array[mid] < target) {
        start = mid + 1; // Adjust the start index if the target is greater
      } else {
        end = mid - 1; // Adjust the end index if the target is smaller
      }
    }
  
    return -1; // Return -1 if the target element is not found
  }

module.exports=BinarySearch;