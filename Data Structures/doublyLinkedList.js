class Node {
	constructor(val) {
  	this.val = val;
		this.next = null;
		this.prev = null;

  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let n = new Node(val);
		
    if(!this.head) {
    	this.head = n;
      this.tail = n;
    } else {
    	this.tail.next = n;
      n.prev = this.tail;
      this.tail = n;
    }
    
    this.length++;
    return this;
  }

  pop() {
    if(!this.head) return undefined;
    let newNode = this.tail;
    
    if(this.length === 1) {
    	this.head = null;
      this.tail = null;
    } else {
      this.tail = newNode.prev
      this.tail.next = null;
      newNode.prev = null
    }
    this.length--;
    return newNode;
  }
  
    shift() {
      let node = this.head;
      if(!this.head) return undefined;
      
      if(this.length === 1) {
        this.head = null; 
        this.tail = null
      } else {
        this.head = node.next;
        this.head.prev = null;
        node.next = null;
      }
      this.length--;
      return node;
    }

    unshift(val) {
      let newNode = new Node(val);
  
			if(this.length === 0) {
      	this.head = newNode;
      	this.tail = newNode;
      } else {
      	this.head.prev = newNode;
        newNode.next = this.head
        this.head = newNode; 
      }
      this.length++;
      return this;
    }

    get(index) {
      if(index < 0 || index >= this.length) return null;
      
      if(index <= this.length/2) {
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
          current = current.next;
          counter++
        }
        return current;
      } else {
        let counter = this.length - 1;
        let current = this.tail;
        while(counter !== index) {
          current = current.prev;
          counter--;
        }
        return current;
      }
    } 

    set(index, val) {
      let foundNode = this.get(index)
        if(foundNode) {
          foundNode.val = val;
          return true;
        }
        return false;
      }

    insert(val, index) {
      if(index < 0 || index > this.length) return false;
      if(index === 0) return !!this.unshift(val);
      if(index === this.length) return !!this.push();

      let newNode = new Node(val);
      let currNode = this.get(index);

      currNode.prev.next = newNode;
      newNode.prev = currNode.prev;
      newNode.next = currNode.next;
      this.length++;
      return true;
    }

    remove(index) {
      if(index < 0 || index >= this.length) return null;
      if(index === 0) return this.shift();
      if(index === this.length - 1) return this.pop();
      
      let removedNode = this.get(index);
      let prevNode = removedNode.prev;
      let nextNode = removedNode.next
      
      removedNode.next = null;
      removedNode.prev = null;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
      return removedNode;
    }
}

let list = new DoublyLinkedList();
list.push('123');
list.push('456');
list.unshift('55555');