# Breadth First Search

Breadth First Search is an algorithm for searching through graphs, looking for one or more nodes that meet some search criteria. With `has_key`, we saw a strategy to search for a particular key in a binary search tree, taking advantage of the fact that each node's left subtree contains smaller keys and each node's right subtree contains larger keys.  

Breadth First Search is more general -- it doesn't make any assumptions about the relationships among nodes' keys. In fact, we can search by criteria that aren't based on keys at all. With the tree of hex color names, we could use Breadth First Search to find all of the colors created by one user. 

**Breadth First Search chooses a start node and "visits" every node of a graph in order of how many edges the node is from that start.**  In a tree, we pick the root as the start node. We'll also consider each node to be the same "length." In graph terms, that means the "weight" of each edge is the same. Breadth first search only works for graphs with unweighted edges or graphs where all the edge weights are the same.

Breadth First Search spreads like a mold across the tree or graph, moving outward one step at a time from its start location.  

![breadth first search animation](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)


## Exercise: Breadth First Tree Search

1. In English, describe how you would do breadth first search. Your algorithm should assume you have a tree data structure and can access each node's key, and each node's array of children. (Do not assume it's a binary search tree.)

1. On the whiteboard, pseudocode a breadth first search function. Assume you have a tree data structure that allows the following operations:
	
	* given a tree/node `my_tree`, get the root of the tree with `my_tree`
	* given a tree/node, get the key of the node with `.key`
	* given a tree/node, get the children of the node with `.children`

1. In either "tree.js" or "tree.rb", code up your breadth first search function.

1. How would you modify your breadth first search function to work on a binary search tree? 

1. Binary search trees can be faster than arrays at keeping data sorted when you insert and remove nodes, but only if the binary search tree is *balanced*, because a balanced tree has the minimum possible number of levels to store all its nodes. We can check that a tree is balanced by looking at where it has "missing children," room where nodes could have a child but don't. A tree is balanced if all of the missing children are at the very bottom level of the tree or just one level higher. How could you use breadth first search to check whether a binary search tree is balanced?


1. How could you modify breadth first search to pick out a group of nodes based on some data characteristic instead of just the key? For instance, how could you use it to find all of the hex colors named by a particular user in the hex color tree from yesterday?  




<!-- 



## Choose Your Earliest Win

1. A choose your own adventure book is composed of many chunks of a story. The book gives readers a choice at the end of each chunk about what the main character in the story should do. Each option sends the reader to a different page to read another chunk of the story that says what happens based on their decision.

	```
	...

	What will you do?
	To release the fairy from the jar, go to page 89.
	To ask the fairy about the Sword of Truth, go to page 43.
	To run back to the clearing, go to page 200.
	```

	Choose your own adventure books can usually either end happily, or end badly (with the main character's death/capture/etc). Write a program to find the minimum number of decisions that could lead to a happy ending, in a choose your own adventure book. 


Q: How will you know if an ending is "happy"? (A: assume a happy ending node has a `happy_ending` attribute set to `true`.)

Q: Can we ever have two stories share a chunk / take a route that goes through the same page?  (A: For a simpler version of the problem, you can start off assuming no. But when you code the full thing, yes.)

Q: Can we ever have a cycle, where you keep visiting the same pages over and over again? (A: No. That wouldn't be a very fun book. But as a stretch you can consider how you would handle that!)


Q: What data structure will you use to represent the choose your own adventure book? -->
