const heap = require("./index.js")
const test = require("tape")

const assertPush = (t, orderFunc, input, output, msg) => {
  var h = heap(orderFunc)
  input.forEach(h.push)
  t.deepLooseEqual(h.all(), output, msg)
}

const assertPop = (t, orderFunc, input, output, msg) => {
  var h = heap(orderFunc)
  input.forEach(h.push)
  h.pop()
  t.deepLooseEqual(h.all(), output, msg)
}

test("min-heap push", (t)=>{
  assertPush(t, heap.min, [1], [1], "add one")
  assertPush(t, heap.min, [1, 2], [1, 2], "add two, no swap")
  assertPush(t, heap.min, [2,1], [1,2], "add two, swap")
  assertPush(t, heap.min, [1,2,3], [1,2,3], "add three, no swap")
  assertPush(t, heap.min, [3,2,1], [1,3,2], "add three, swap")
  assertPush(t, heap.min, [1,2,3,4], [1,2,3,4], "add four, no swap")
  assertPush(t, heap.min, [4,3,2,1], [1,2,3,4], "add four, swap")
  assertPush(t, heap.min, [47,12,43,23,1,6,7,19,4,45], [ 1,4,6,12,23,43,7,47,19,45 ], "add many, swap")
  t.end()
})

test("min-heap pop", (t)=>{
  assertPop(t, heap.min, [1], [], "pop, none left")
  assertPop(t, heap.min, [1,2], [2], "pop, one left")
  assertPop(t, heap.min, [1,2,3], [2,3], "pop, two left")
  assertPop(t, heap.min, [9,1,5,3], [3,9,5], "pop, three left")
  assertPop(t, heap.min, [16,14,12,10,8,6], [8,10,14,16,12], "pop, four left")
  t.end()
})

test("max-heap push", (t)=>{
  assertPush(t, heap.max, [1], [1], "add one")
  assertPush(t, heap.max, [1,2], [2,1], "add two, swap")
  assertPush(t, heap.max, [2,1], [2,1], "add two, no swap")
  assertPush(t, heap.max, [1,2,3], [3,1,2], "add three, swap")
  assertPush(t, heap.max, [3,2,1], [3,2,1], "add three, no swap")
  assertPush(t, heap.max, [1,2,3,4], [4,3,2,1], "add four, no swap")
  assertPush(t, heap.max, [4,3,2,1], [4,3,2,1], "add four, swap")
  assertPush(t, heap.max, [47,12,43,23,1,6,7,19,4,45], [47,45,43,19,23,6,7,12,4,1], "add many, swap")
  t.end()
})

test("max-heap pop", (t)=>{
  assertPop(t, heap.max, [1], [], "pop, none left")
  assertPop(t, heap.max, [1,2], [1], "pop, one left")
  assertPop(t, heap.max, [1,2,3], [2,1], "pop, two left")
  assertPop(t, heap.max, [9,1,5,3], [5,3,1], "pop, three left")
  assertPop(t, heap.max, [16,14,12,10,8,6], [14,10,12,6,8], "pop, four left")
  t.end()
})
