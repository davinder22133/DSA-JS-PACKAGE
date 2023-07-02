class Node {
    constructor(value) {
      this.value = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    // Add an element to the end of the doubly linked list
    append(value) {
      const newNode = new Node(value);
  
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
  
      this.size++;
    }
  
    // Insert an element at a specific position in the doubly linked list
    insertAt(value, index) {
      if (index < 0 || index > this.size) {
        return "Invalid index";
      }
  
      const newNode = new Node(value);
  
      if (index === 0) {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      } else if (index === this.size) {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let count = 0;
  
        while (count < index) {
          current = current.next;
          count++;
        }
  
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev.next = newNode;
        current.prev = newNode;
      }
  
      this.size++;
    }
  
    // Remove an element from a specific position in the doubly linked list
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return "Invalid index";
      }
  
      let current = this.head;
  
      if (index === 0) {
        this.head = current.next;
  
        if (this.head !== null) {
          this.head.prev = null;
        } else {
          this.tail = null;
        }
      } else if (index === this.size - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        let count = 0;
  
        while (count < index) {
          current = current.next;
          count++;
        }
  
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
  
      this.size--;
      return current.value;
    }
  
    // Get the element at a specific position in the doubly linked list
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
  
    // Check if the doubly linked list is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // Get the number of elements in the doubly linked list
    getSize() {
      return this.size;
    }
  
    // Print the elements in the doubly linked list
    print() {
      let current = this.head;
      const elements = [];
  
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
  
      console.log(elements.join(" <-> "));
    }
  }

  
  module.exports=DoublyLinkedList;