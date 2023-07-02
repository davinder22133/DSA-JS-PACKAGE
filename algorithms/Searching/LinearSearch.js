function LinearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i; // Return the index of the target element if found
      }
    }
    return -1; // Return -1 if the target element is not found
  }

module.exports=LinearSearch;