class Node {
	constructor(val){
  	this.val = val;
    this.next = null;
  }
}

class Queue {
	constructor() {
  	this.first = null;
    this.last = null;
    this.size = 0;
  }
  
  enqueue(val) {
  	let node = new Node(val);
    if(!this.first) {
    	this.first = node;
      this.last = node;
    } else {
    this.last.next = node;
    this.last = node;
    }
    return ++this.size;
  }
  
  dequeue() {
  	if(!this.first) return null;
    
    let curr = this.first;
    if(this.first === this.last) {
    	this.last = null
    }
    this.first = curr.next;
    this.size--;
    
    return curr.val;
  }
}

let q = new Queue();