class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Add an element to the end of the linked list
    append(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    // Insert an element at a specific position in the linked list
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        return "Invalid index";
      }
  
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else if (index === this.size) {
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let prev = null;
        let count = 0;
  
        while (count < index) {
          prev = current;
          current = current.next;
          count++;
        }
  
        newNode.next = current;
        prev.next = newNode;
      }
  
      this.size++;
    }
  
    // Remove an element from a specific position in the linked list
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return "Invalid index";
      }
  
      let current = this.head;
      let prev = null;
      let count = 0;
  
      if (index === 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          prev = current;
          current = current.next;
          count++;
        }
  
        prev.next = current.next;
  
        if (index === this.size - 1) {
          this.tail = prev;
        }
      }
  
      this.size--;
      return current.value;
    }
  
    // Get the element at a specific position in the linked list
    getAt(index) {
      if (index < 0 || index >= this.size) {
        return "Invalid index";
      }
  
      let current = this.head;
      let count = 0;
  
      while (count < index) {
        current = current.next;
        count++;
      }
  
      return current.value;
    }
  
    // Check if the linked list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the number of elements in the linked list
    getSize() {
      return this.size;
    }
  
    // Print the elements in the linked list
    print() {
      let current = this.head;
      const elements = [];
  
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
  
      console.log(elements.join(" -> "));
    }
  }
  
  module.exports=LinkedList;