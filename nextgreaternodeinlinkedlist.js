//Objective is to create an array that represents the next larger node from
//that given index in the linked list

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(6)
head.next.next.next = new Node(3)
head.next.next.next.next = new Node(4)
head.next.next.next.next.next = new Node(5)
head.next.next.next.next.next.next = new Node(6)


//O(n) solution where we use a stack to store elements until a greater element is found

let stack = []
let result = []
let index = 0

//Use a stack to keep track of the index of the result and the next greater value
while (head) {
    while (stack.length > 0 && stack[stack.length - 1][1] < head.val) {
        let top = stack.pop()
        result[top[0]] = head.val
    }
    
    stack.push([index++, head.val])
    
    head = head.next
}

//No more elements greater than it
while (stack.length) {
    let top = stack.pop()
    result[top[0]] = 0
}

return result