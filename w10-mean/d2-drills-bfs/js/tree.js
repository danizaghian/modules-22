// This object type represents a tree
// where each node has an array of children.

var Tree = function (key, children){
	this.key = key; 	
	this.children = children || [];	// an array, holds the Trees that we can go to directly from here
};

// Searches through all nodes of the tree, spreading 
// outward from the root. Looks for any node with key equal
// to the targetKey param. Returns null if no such node is found.
Tree.prototype.breadthFirstSearch = function(targetKey){
	return null;
};


// Returns an array containing all nodes for which 
// the selectionFunction returns true.
Tree.prototype.breadthFirstSearchAll = function(selectionFunction){
	return [];
};

var myTree = new Tree('A'),
	bNode = new Tree('B'),
	cNode = new Tree('C'),
	dNode = new Tree('D'),
	eNode = new Tree('E'),
	fNode = new Tree('F'),
	gNode = new Tree('G');

myTree.children.push(bNode, cNode);
bNode.children.push(dNode, eNode, fNode);
eNode.children.push(gNode);

//          D 
//        /
//     B  -- E -- G
//   /	  \
// A        F
//   \
//     C 

console.log(myTree.breadthFirstSearch('E'));  
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// { key: 'E', children: [ { key: 'G', children: [] } ] }


console.log(myTree.breadthFirstSearch('G'));  
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F', 'G' ]
// queue:  [ 'G' ]
// { key: 'G', children: [] }

console.log(myTree.breadthFirstSearch('H')); 

// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F', 'G' ]
// queue:  [ 'G' ]
// null




console.log(myTree.breadthFirstSearchAll(function(node){
	return node.key > 'D';
}));
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F' ]
// [ { key: 'E', children: [ [Object] ] },
//   { key: 'F', children: [] } ]



console.log(myTree.breadthFirstSearchAll(function(node){
	return node.username == "Bob";
}));
// queue:  [ 'A' ]
// queue:  [ 'B', 'C' ]
// queue:  [ 'C', 'D', 'E', 'F' ]
// queue:  [ 'D', 'E', 'F' ]
// queue:  [ 'E', 'F' ]
// queue:  [ 'F', 'G' ]
// queue:  [ 'G' ]
// []





