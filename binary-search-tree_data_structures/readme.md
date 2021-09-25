# Binary Search Tree (BST)

## Definition

A Binary Search Tree is non Linear Tree data structure which can have at most two nodes as children to any node with one specific condition. Left node if present, it's value should be less than value of parent node and the right node if present it's value should be greater than value of parent node.

### Operations of BST

1. [**add(key)**](#addkey) : Inserts new node with value key into tree.
2. [**find(key)**](#findkey) : Searches for node with value key, if found returns true, else returns false.
3. [**min()**](#min) : Searches for node whose value is the minimum among other tree node values.
4. [**max()**](#max) : Searches for node whose value is the maximum among other tree node values.

### add(key):

- Create new node with value key
- Start at the root
  - If there is no root, new node becomes the root
  - If root is there, check whether the key is greater than or lesser than the value of root.
    - If greater
      - Check if there is node to right
        - If present, move to that node and repeat
        - If not, new node becomes the right node of current node.
    - If lesser
      - Check if there is node to left
        - If present, move to that node and repeat
        - If not, new node becomes the left node of current node.

### find(key)

- Start at the root
  - If there is no root, return false
  - If root node value is equal to key, return true
  - If not, check whether the key is greater than or lesser than the value of root.
    - If greater
      - Check if there is node to right
        - If present, move to that node and repeat
        - If not, return false.
    - If lesser
      - Check if there is node to left
        - If present, move to that node and repeat
        - If not, return false.

### min()

- Start with root
  - If no root, return undefined
  - Else traverse towards left of tree since nodes on left are lesser than the parent node.
    - If found return nodes value
    - Else return undefined

### max()

- Start with root
  - If no root, return undefined
  - Else traverse towards right of tree since nodes on right are greater than the parent node.
    - If found return nodes value
    - Else return undefined
