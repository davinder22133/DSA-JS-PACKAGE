class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the top of the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Return the top element from the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the number of elements in the stack
    size() {
      return this.items.length;
    }
  
    // Remove all elements from the stack
    clear() {
      this.items = [];
    }
  
    // Print the elements in the stack
    print() {
      console.log(this.items.join(" "));
    }
  }
  
  module.exports=Stack;