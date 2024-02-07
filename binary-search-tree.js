// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {

    let newNode = new TreeNode(val);
    //if there is nothing there,
    //put something there.
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    //checking the values for size
    if (val < currentNode.val) {
      //if theres nothing there,
      //put something there
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this
      }
      //reasign the current node to
      //what you looked at.
      currentNode = currentNode.left;
      //reccursive step with new current node
      return this.insert(val, currentNode)
    }
    //see above for notes
    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode
        return this;
      }
      currentNode = currentNode.right;
      return this.insert(val, currentNode)
    }
    return this
  }


  search(val, currentNode = this.root) {

    if (!currentNode) {
      return false;
    }
    if (val === currentNode.val) {
      return true;
    }
    if (val < currentNode.val) {
      return this.search(val, currentNode.left)
    }

    if (val > currentNode.val) {
      return this.search(val, currentNode.right)

    }

  }


  preOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      console.log(currentNode.val) 
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
    
  }


  inOrderTraversal(currentNode = this.root) {
    if (currentNode) {
      this.inOrderTraversal(currentNode.left) 
      console.log(currentNode.val)
      this.inOrderTraversal(currentNode.right);

    }
    
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
    if (currentNode) {
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val)
    }
          
      
          
      
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
