class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Add an element to the end of the circular linked list
    append(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
      } else {
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    // Insert an element at a specific position in the circular linked list
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        return "Invalid index";
      }
  
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = newNode;
      } else if (index === this.size) {
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let count = 0;
  
        while (count < index - 1) {
          current = current.next;
          count++;
        }
  
        newNode.next = current.next;
        current.next = newNode;
      }
  
      this.size++;
    }
  
    // Remove an element from a specific position in the circular linked list
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return "Invalid index";
      }
  
      let current = this.head;
  
      if (index === 0) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head = current.next;
          this.tail.next = this.head;
        }
      } else {
        let count = 0;
  
        while (count < index - 1) {
          current = current.next;
          count++;
        }
  
        current.next = current.next.next;
  
        if (index === this.size - 1) {
          this.tail = current;
        }
      }
  
      this.size--;
      return current.value;
    }
  
    // Get the element at a specific position in the circular linked list
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
  
    // Check if the circular linked list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the number of elements in the circular linked list
    getSize() {
      return this.size;
    }
  
    // Print the elements in the circular linked list
    print() {
      if (this.head === null) {
        console.log("Circular Linked List is empty");
      } else {
        let current = this.head;
        const elements = [];
  
        do {
          elements.push(current.value);
          current = current.next;
        } while (current !== this.head);
  
        console.log(elements.join(" -> "));
      }
    }
  }

  module.exports=CircularLinkedList;