# Trees

## Introduction

### Table of Contents

[[toc]]

## Data Structure

A tree is a hierarchical data structure that consists of various "nodes" connected by "edges".

<img src="./images/tree.png" class="center x50">

While it may not look like one, you can flip the direction of the image and see a "tree".

Here, our "nodes" are the *circles* that contain various letters, while our "edges" are the arrows pointing to other "nodes".

## Definition of Terms

Here, we will formally define the terms used in a tree data structure for you to understand what they may refer to when talking about trees.

- Node - A **node** is a container holding a key or value. It also points to it's *child* nodes.
- Edge - An **edge** is the link connecting one node to another. These are commonly represented as *arrows*.
- Root - A **root**, or **root node**, is the first node in a tree.
- Parent node - A **parent node**, or **internal node**, is a **node** that has an edge connecting to a bottom node, commonly referred to as a **child node**
- Child node - A **child node** is a node located below a certain node connected by an edge.
- Leaf - A **leaf** or **leaf node** is a node that does not connect to any child nodes.
- Ancestors - Are nodes on the path from the current node to the root.
- Descendants - Are nodes on the path from the current node to a leaf.
- Subtree - Represents the descendants of a node.
- Visiting - Checking the value of a node.
- Traversing - Passing through nodes in a specific order.
- Levels - The "generation" of a node. If the root node is at level 0, then its next child node is at level 1, its grandchild is at level 2, and so on. Basically, it's how "down" the node is from the root.
- Degree of a node - The total amount of branches (valid edges) the node has.
- Height of a node - The number of edges from the current node to the deepest leaf node.
- Depth of a node - The number of edges from the current node to the root node.
- Height of a tree - The number of edges from the root node to the deepest leaf node.
- Forest - A collection of unjoined trees. (multiple trees)

<img src="./images/tree-defn.gif">

<center>
<br>
<i>It is heavily suggested you view this image in Dark mode.</i>
</center>

## Notes Outline

::: tip
All notes from this point on are in "raw format", meaning that the current explanations for them will be *pure* text, and is most likely in the *outline format* note-taking method.

Sadly, due to time constraints, no visual aids or other imagery will exist as of the current moment, and will be added in a future time.
:::

### Rooted and unrooted trees

- Rooted trees are trees where a single node is designated as the root. 
- Unrooted trees don't have a "root". In simpler terms, the tree does not exihibit "ancestry", and looks more "interconnected".

### Types of trees

- General tree
	- no rules on the number of children
- K-ary tree
	- children nodes are limited by k. A node may have no more than k children

### Binary Tree

A type of k-ary tree where each node has a maximum of two children, commonly known as the **left child** and **right child**.

### Types of Binary Trees

- Binary Search Tree (BST)
	- A type of binary tree exhibiting the following properties:
		- The left subtree or left child of a node contains values less than the value of the node.
		- The right subtree or right child of a node contains values greater than the value of the node.
		- The left and right subtrees must also be binary search trees.
- Adelson-Velski and Landis Tree (AVL)
	- A Binary Search Tree that is *self-balancing*
		- A *self-balancing* binary search tree is a binary search tree that automatically keeps it's height as small as possible.
- Red-Black Tree 
	- A Binary Search Tree that is *self-balancing*
		- A *self-balancing* binary search tree is a binary search tree that automatically keeps it's height as small as possible.
	- Follows certain rules to keep balance:
		- Each node in the tree is either "red" or "black".
		- The *root* is always "black".
		- Red nodes cannot have red children.
		- Every path from the root to any of the leaf nodes must have the same number of black nodes.
			- This means that for **all** paths from the root to the leaf nodes, they must **all** have the same number of black nodes traversed, including the leaf node (which is always black).

### Types of K-ary trees

- Full k-ary tree
	- A k-ary tree whose nodes have either $0$ **or** $k$ children.
- Complete k-ary tree
	- A k-ary tree whose nodes must have $k$ children **except** for the leaf nodes.
	- For the leaf nodes, they must be filled from **left to right**.
- Perfect k-ary tree
	- A full k-ary tree, except
	- **All** leaf nodes **must** be at the **same** level
	- Tip: A Perfect k-ary tree is both a full and complete k-ary tree. **However**, that does not mean that the converse is always true.

### Types of Binary trees

Adding onto the types of k-ary trees above, binary trees also have extra types.

- Balanced binary tree
	- A binary tree whose height is $O(log n)$, where $n$ is the number of nodes.
	- The height of the left and right subtree can vary at most one
- Degenerate/Pathological Binary Tree
	- A binary tree whose nodes have a single left or right child.
- Skewed Binary Tree
	- A degenerate/pathological binary tree where the tree is "dominated" in either the left or right nodes.
		- Could be a left-skewed binary tree or right-skewed binary tree
		- Side "domination" can be counted by the number of left or right nodes. The side with more nodes "dominates".