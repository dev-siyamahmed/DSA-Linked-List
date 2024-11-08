class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty() {
        return this.length === 0
    }

    push(value) {
        let newNode = {
            value: value,
            next: null
        }

        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    pop(value) {
        if (!this.head) {
            return null
        }

        if (this.length === 1) {
            let removeNode = this.head
            this.head = null
            this.tail = null
            this.length = 0
            return removeNode
        }

        let currentNode = this.head
        let lastNode = this.tail
        let newLastNode
        while (currentNode) {

            if (currentNode.next == this.tail) {
                newLastNode = currentNode
                break
            }
            currentNode = currentNode.next
        }

        newLastNode.next = null
        this.tail = newLastNode
        this.length--

        return lastNode
    }
}
let list = new SinglyLinkedList()

list.push(5)
list.push(10)
list.push(15)
list.push(20)
list.pop()
console.log(list);