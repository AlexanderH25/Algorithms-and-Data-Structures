class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let node = new Node(val);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let currNode = this.first;
            this.first = node;
            this.first.next = currNode;    
        }
        return ++this.size;
      }


      pop() {
        if(!this.first) return null;
        let curr = this.first
        
          if(this.size === 1) {
            this.last = null;
          } 
          this.first = curr.next;
          
          this.size--;
          return curr.value;
        }
}

let stack1 = new Stack();