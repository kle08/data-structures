var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    var newNode = Node(value); // create new node that stores the value 
    
    if(list.head === null && list.tail === null) { // if it is a new list 
      list.head = newNode;
      list.tail = newNode;
    } else {
        list.tail.next = newNode;
        list.tail = newNode;
    }
  
  };

  list.removeHead = function() {
    removeNode = list.head.value
    list.head = list.head.next
    return removeNode
  };

  list.contains = function(target) {
    var contains = false; 
    var temp = this.head;
    while(contains === false) {
      if(temp.value === target) {
        contains = true;
      } else {
        if(temp.next === null) {
          break;
        }
        temp = temp.next;
      }
    }
    return contains
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
