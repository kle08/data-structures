var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods)
  newTree.children = [];  // fix me


  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	// create a new tree w/ value 
	var child = Tree(value);
	//push new tree into children array 
	this.children.push(child);
};

treeMethods.contains = function(target) {
	if(this.value === target) {
		return true;
	}
	for(var i =0; i < this.children.length; i++) {
		if(this.children[i].contains(target)) {
			return true
		}
	}
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
