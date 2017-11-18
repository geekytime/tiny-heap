A tiny little heap implementation.

## Example

```javascript
const tinyHeap = require("tinyHeap")

const minHeap = tinyHeap()
minHeap.push(3)
minHeap.push(2)
minHeap.push(1)
const top = minHeap.pop()
// 1
```

## API

### heap(inOrder=min)

Initializes a new tiny heap.

The `inOrder` argument is a function used to compare parent nodes of the heap to keep it in order. The default value makes it a min-heap, like this:

```javascript
const min = (parent, child) => {
  return parent < child
}
```

`min` and `max` implementations are provided on tinyHeap:

```javascript
const maxHeap = tinyHeap(tinyHeap.max)
maxHeap.push(1)
maxHeap.push(2)
maxHeap.push(3)
const top = maxHeap.pop()
// 3
```

### push(value)

Pushes a value onto the heap. It will be sifted into position using the `inOrder` function.

### pop()

Pops the top value of the heap. For a min-heap this will be the min value.
For a max-heap it'll be the max value.

### peek()

Gets the top value of the heap without popping it. Useful if you need to compare before you pop.

### size()

Gets the number of nodes in the heap.

### all()

Returns all of the nodes of the heap as an array. Nodes are ordered top to bottom, left to right.
