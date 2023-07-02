# javascript_dsa

The \"javascript_dsa\" npm package is a comprehensive collection of common data structures and algorithms implemented in JavaScript. It includes essential data structures such as linked lists, stacks, and queues, along with efficient algorithms for sorting, searching, and more.

## Installation

To install this package you can use this command which is given below:

```bash
npm i javascript_dsa
```

## Usage

```
const dsa_and_algo=require('javascript_dsa');
console.log(dsa_and_algo);

This "dsa_and_algo" variable is an object that has many properties listed below:
{
  MergeSort: [Function: mergeSort],
  SelectionSort: [Function: selectionSort],
  BubbleSort: [Function: bubbleSort],
  InserationSort: [Function: insertionSort],
  QuickSort: [Function: quickSort],
  SingleLinkedList: [class LinkedList],
  DoublyLinkedList: [class DoublyLinkedList],
  CircularLinkedList: [class CircularLinkedList],
  CircularDoublyLinkedList: [class CircularDoublyLinkedList],
  Stack: [class Stack],
  Queue: [class Queue]
}

You can also use these properties directly:

const {MergeSort}=require('javascript_dsa');
const arr=MergeSort([1,5,7,2,0,-2]);
console.log(arr);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.



## License

[ISC](https://opensource.org/license/isc-license-txt/)