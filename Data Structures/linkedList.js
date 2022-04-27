
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class LinkedList {
      constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
      let node = new Node(val);
      
      if(!this.head) {
          this.head = node;
          this.tail = this.head;
      } else {
          this.tail.next = node;
          this.tail = node;
      }
      
      this.length++;
      return this;
    }

    pop() {
      if(!this.head) return undefined;
    
      let current = this.head;
      let newTail = current;

      while(current.next) {
      newTail = current;
      current = current.next
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--; 
      
      if(this.length === 0) {
      	this.head = null;
        this.tail = null;
      }
      return current;
    }

    shift() {
      if(!this.head) return undefined;
      
      let currHead = this.head;
      this.head = currHead.next;
      
      this.length--;
    
      if(this.length === 0) {
        this.tail = null;
      }
      
      return currHead;
      }

      unshift(val) {
      let node = new Node(val);

      if(!this.head) {
        this.head = node;
        this.tail = this.head;
      } else {
        node.next = this.head;
        this.head = node;
      }

      this.length++;
      return this;
      }

    get(index) {
      if(index < 0 || index >= this.length) return null;
  
      let counter = 0;
      let n = this.head;
  
      while(n) {
        if(counter === index) { 
          return n;
        }
        n = n.next
        counter++; 
      }
    }

    set(val, index) {
      let foundNode = this.get(index);
      
      if(foundNode){
        foundNode.val = val;
      } else {
        return false;
      }
      
      return true;
    }
    
    insert(val, index) {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      
      if(index < 0 || index > this.length) return false;
      
      if(index === 0) {
        this.unshift(val);
        return true;
      }
      
      if(index === this.length) {
        //! symbol converts the return to be a boolean value
        return !!this.push(val);
      }
      
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
      return true;
    }

    remove(index) {

    if(index < 0 || index > this.length) return null;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    let updateNode = this.get(index - 1);
    let curr = updateNode.next

    if(!curr) {
    return null;
    } 
    updateNode.next = curr.next
    this.length--;
    return curr;
    }

    reverse() {
      let node = this.head 
      this.head = this.tail
      this.tail = node;

      let next = null;
      let prev = null;

      while(node) {
        next = node.next;
        node.next = prev
        prev = node;
        node = next;
      }
      return this;
    }

    print() {
      let curr = this.head
      let arr = [];
      
      while(curr) {
        arr.push(curr.val);
          curr = curr.next
      }
      
      return arr
    }
  } 
  
  let n = new LinkedList();
  
n.push('123');
n.push('456');
n.push('789')
n.remove(1)
n.insert('456', 1)
n.print();