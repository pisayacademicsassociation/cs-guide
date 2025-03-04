# Binary Search Tree

## Introduction

### Table of Contents

[[toc]]

## Notes Outline

::: tip
All notes from this point on are in "raw format", meaning that the current explanations for them will be *pure* text, and is most likely in the *outline format* note-taking method.

Sadly, due to time constraints, no visual aids or other imagery will exist as of the current moment, and will be added in a future time.
:::

### Recap
- left subtree
	- **all** values lesser than root
	- all values **in the subtree** are lesser than the current root.
- right subtree
	- **all** values higher than root
	- all values **in the subtree** are higher than the current root.

### Binary Search Tree operations
- search
	- let k be current value
	- if k is lesser than the root value
		- go to left node
	- otherwise, if k is greater than the root value
		- go to right node
	- if said nodes do not exist, return false (not in tree)
- insertion
	- same algorithm as search, except:
	- if the node does not exist, add k as the node.
- deletion
	- case 1: no children
		- no other effect
	- case 2: single child
		- child node "takes the place" of it's parent node.
	- case 3: both children exist
		- the parent node's value is replaced with the value of it's inorder predecessor or successor
			- inorder predecessor, meaning: the previous element to the parent node by inorder traversal
			- inorder successor, meaning: the next element to the parent node by inorder traversal
				- the "leftmost" right child (inorder sucessor)
					- Inorder traversal: left subtree -> root -> right subtree.
					- However, the right subtree is also traversed inorder, meaning that the left subtree is chosen until no child node exists.
					- Therefore, this will be the "leftmost" node on the tree.
				- the "rightmost" left child (inorder predecessor)
					- Inorder traversal: left subtree, then root
					- However, the left subtree is also traversed inorder, which means that it's traversal is: left subtree -> root -> right subtree
					- Therefore, this will be the "rightmost" node on the tree.
			- inorder sucessor is needed only when there us a right child
			- you can use **either** the inorder precedessor or sucessor.