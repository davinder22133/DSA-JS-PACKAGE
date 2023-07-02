class Node {
    constructor(value) {
      this.value = value;
      this.children = [];
    }
  
    addChild(value) {
      const newNode = new Node(value);
      this.children.push(newNode);
    }
  
    removeChild(value) {
      const index = this.children.findIndex(child => child.value === value);
      if (index !== -1) {
        this.children.splice(index, 1);
      }
    }
  }
  
  class Tree {
    constructor() {
      this.root = null;
    }
  
    addRoot(value) {
      const newNode = new Node(value);
      this.root = newNode;
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
      node.children.forEach(child => this.printNode(child, `${indent}  └─ `));
    }
  
    remove(value) {
      if (this.root === null) {
        return;
      }
  
      if (this.root.value === value) {
        this.root = null;
        return;
      }
  
      this.removeNode(this.root, value);
    }
  
    removeNode(node, value) {
      const index = node.children.findIndex(child => child.value === value);
      if (index !== -1) {
        node.children.splice(index, 1);
        return;
      }
  
      node.children.forEach(child => this.removeNode(child, value));
    }
  }
  
 
  module.exports=Tree;
  