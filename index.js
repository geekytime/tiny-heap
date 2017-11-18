const min = (parent, child) => {
  return parent < child
}

const max = (parent, child) => {
  return parent > child
}

const heap = (inOrder=min) => {
  const data = []

  const push = (value) => {
    data.push(value)
    const index = data.length - 1
    heapifyUp(index)
  }

  const pop = () => {
    const value = data.shift()
    if (data.length > 0){
      const last = data.pop()
      data.unshift(last)
      heapifyDown(0)
    }
    return value
  }

  const heapifyUp = (index) => {
    const parentIndex = Math.ceil((index-2)/2)
    if (parentIndex >= 0){
      const value = data[index]
      const parent = data[parentIndex]
      if (!inOrder(parent, value)){
        swap(index, parentIndex)
        heapifyUp(parentIndex)
      }
    }
  }

  const heapifyDown = (index) => {
    var swapIndex = compareChildren(index)
    if (index !== swapIndex){
      swap(index, swapIndex)
      heapifyDown(swapIndex)
    }
  }

  const compareChildren = (index) => {
    const parentValue = data[index]
    const leftChildIndex = index * 2 + 1
    const leftChildValue = data[leftChildIndex]
    const rightChildIndex = index * 2 + 2
    const rightChildValue = data[rightChildIndex]

    if (rightChildValue !== undefined){
      if (!inOrder(leftChildValue, rightChildValue)){
        if (!inOrder(parentValue, rightChildValue)){
          return rightChildIndex
        }
      }
    }

    if(leftChildValue !== undefined){
      if (!inOrder(parentValue, leftChildValue)){
        return leftChildIndex
      }
    }

    return index
  }

  const swap = (x, y) =>{
    const temp = data[y]
    data[y] = data[x]
    data[x] = temp
  }

  const peek = () => {
    return data[0]
  }

  const size = () => {
    return data.length
  }

  const all = () => {
    return [...data]
  }

  return {
    all,
    peek,
    pop,
    push,
    size
  }
}

heap.min = min
heap.max = max

module.exports = heap
