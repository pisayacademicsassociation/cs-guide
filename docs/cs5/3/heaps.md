# Heaps

## Introduction

### Table of Contents

[[toc]]

## Notes Outline

::: tip
All notes from this point on are in "raw format", meaning that the current explanations for them will be *pure* text, and is most likely in the *outline format* note-taking method.

Sadly, due to time constraints, no visual aids or other imagery will exist as of the current moment, and will be added in a future time.
:::

### Heaps
- special kind of complete binary tree
- two types: min heap and max heap
	- min heap
		- the root node has the minimum value
		- the value of each node is greater than or equal to the value of its parent node.
	- max heap
		- the root node has the maximum value
		- the value of each node is lesser than or equal to the value of its parent node.

### heapq
- built-in python module to implement a min-heap
	- heapq.heapify
		- converts a regular list to a heap
	- heapq.heappush
		- adds an element to the heap by adjusting the order to maintain heap structure
	- heapq.heappop
		- returns the smallest element to the heap, then adjusts the order to maintain heap structure
	- heapq.heappushpop
		- combines `heapq.heappush` and `heapq.heappop`, in that order. Heap structure is maintained after this operation.
	- heapq.heapreplace
		- removes the smallest element (`heapq.heappop`) and inserts a new item (`heapq.heappush`). Heap structure is maintained after this operation.
	- heapq.nlargest
		- gets $n$ largest elements from an iterable using the specified `key` to sort the elements
			- a `key` is a function that you can *optionally* supply to control which property to sort on. (for example: `x[1]`)
	- heapq.nsmallest
		- gets $n$ smallest elements from an iterable using the specified `key` to sort the elements
			- a `key` is a function that you can *optionally* supply to control which property to sort on. (for example: `x[1]`)