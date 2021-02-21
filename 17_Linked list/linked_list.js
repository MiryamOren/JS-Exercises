class Node {
 constructor(_data, _next){
   this.data = _data;
   this.next = _next;
 }
}

class LinkedList {
  constructor(){
    this.head = null;
    this.size = 0;
  }

  addNode(_data){
    if (this.head){
      this.head = new Node(_data, this.head);
    } else{
      this.head = new Node(_data, null);
    }

    this.size++;
  }

  getFirst(){
    return this.head;
  }
  getLast(){
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  draw(){
    let res = [];
    let currentNode = this.head;
    while(currentNode){
      res.push(currentNode.data.toString());
      currentNode = currentNode.next;
    }
    console.log(res.join(' > '));
  }

  reverse(){
    let current = this.head;
    let prev = null;

    while (current){
      let temp = current.next;
      current.next = prev;
      prev = current;
      current = temp;
    }

    this.head = prev;
  }

  removeKNode(k){
    let current = this.head; 
    for (let i = 0; i < k - 2; i++){
      current = current.next
    }
    current.next = current.next.next;
  }

  static isCircularLinkedList(linkedList){
    let current = linkedList;
    let nodes = new Set();
    while (current){
      if (nodes.has(current)){
        return true;
      }
      nodes.add(current);
      current = current.next;
    }
    return false;
  }
}


myLinkedList = new LinkedList();
myLinkedList.addNode(1);
myLinkedList.addNode(2);
myLinkedList.addNode(3);
myLinkedList.addNode(4);

console.log(myLinkedList.getFirst())
console.log(myLinkedList.getLast())
myLinkedList.draw();
myLinkedList.reverse();
myLinkedList.draw();
myLinkedList.removeKNode(2);
myLinkedList.draw();
let circularHead = new Node(1, null);
let circular2 = new Node(2, circularHead);
circularHead.next = circular2;
console.log(LinkedList.isCircularLinkedList(circularHead));