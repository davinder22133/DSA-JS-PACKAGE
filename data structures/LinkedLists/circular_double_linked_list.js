class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class CircularDoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    // Add a node to the end of the list
    append(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        // If the list is empty, set the new node as the head and tail
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode;
        newNode.prev = newNode;
      } else {
        // Append the new node after the tail and update the pointers
        newNode.prev = this.tail;
        newNode.next = this.head;
        this.tail.next = newNode;
        this.head.prev = newNode;
        this.tail = newNode;
      }
    }
  
    // Print the list in forward direction
    printForward() {
      if (!this.head) {
        console.log('List is empty.');
        return;
      }
  
      let current = this.head;
      do {
        console.log(current.data);
        current = current.next;
      } while (current !== this.head);
    }
  
    // Print the list in reverse direction
    printReverse() {
      if (!this.head) {
        console.log('List is empty.');
        return;
      }
  
      let current = this.tail;
      do {
        console.log(current.data);
        current = current.prev;
      } while (current !== this.tail);
    }
  }
  

  module.exports=CircularDoublyLinkedList;