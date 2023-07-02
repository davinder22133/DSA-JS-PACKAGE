class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
  
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    print() {
      if (this.root === null) {
        console.log("Tree is empty.");
      } else {
        this.printNode(this.root, "");
      }
    }
  
    printNode(node, indent) {
      console.log(`${indent}${node.value}`);
      if (node.left) {
        this.printNode(node.left, `${indent}  └─ L: `);
      }
      if (node.right) {
        this.printNode(node.right, `${indent}  └─ R: `);
      }
    }
  }
  
  
  