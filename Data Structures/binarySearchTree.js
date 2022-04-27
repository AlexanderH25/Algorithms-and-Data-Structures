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
  
  insert(val) {
  	let newNode = new Node(val);

  	if(!this.root) {
    	this.root = newNode;
        return this;
    } else {
        let current = this.root;
        while(true) {
            if(val === current.value) return undefined;

            if(val < current.value) {
                if(current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if(val > current.value) {
                if(current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right;
                }
            }
        }
    }
  }

  find(value) {
    if(!this.root) return false;
    let current = this.root,
    found = false;

    while(current && !found) {
    	if(value < current.value) {
      	    current = current.left;
      } else if(value > current.value) {
      	    current = current.right
      } else {
      	    found = true;
      }
    }
    if(!found) return false;
	return current;
  }

  //Tree traversal

  BFS() {
    let data = [],
        queue = [],
        node = this.root;

    data.push(node.value);

    while(queue.length) {
      node = queue.shift()
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [],
        current = this.root;

      function helper(node) {
        data.push(node.value);
        if(node.left !== null) helper(node.left);
        if(node.right !== null) helper(node.right);
      }
      helper(current);
  }

  DFSPostOrder() {
    let data = [],
        current = this.root;

      function helper(node) {
        if(node.left !== null) helper(node.left);
        if(node.right !== null) helper(node.right);
        data.push(node.value);
      }
      helper(current);
      
      return data;
  }
  
  // traverse the left then visit the root node then traverse the right
  DFSInOrder() {
  	let data = [],
    		current = this.root
        
       	function helper(node) {
          if(node.left !== null) helper(node.left);
          data.push(node.value);
          if(node.right !== null) helper(node.right);
        }
        helper(current);
        return data;
  }
}

//     10
//	5      13
//2  8   10  16

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(8);
tree.insert(13);
tree.insert(10);
tree.insert(16);

tree.find(50)
