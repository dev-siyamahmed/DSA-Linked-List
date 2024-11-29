class SinglyLinkedList {
    constructor() {
        // Initialize the head and tail of the list as null
        this.head = null
        this.tail = null
        this.length = 0 // Initialize the length of the list
    }

    // Check if the list is empty
    isEmpty() {
        return this.length === 0
    }

    // Add a new node to the end of the list
    push(value) {
        let newNode = {
            value: value, // Store the value in the node
            next: null // The next pointer of the node (currently null)
        }

        // If the list is empty, both the head and tail will point to the new node
        if (this.isEmpty()) {
            this.head = newNode
            this.tail = newNode
        } else {
            // Otherwise, link the current tail's next to the new node, and update the tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++ // Increment the length of the list
    }

    // Remove the last node from the list
    pop() {
        // If the list is empty (no nodes), return null
        if (!this.head) {
            return null
        }

        // If the list has only one node, remove it and reset head, tail, and length
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

        // Traverse the list to find the second last node (new tail)
        while (currentNode) {
            if (currentNode.next === this.tail) {
                newLastNode = currentNode // Set the second last node as the new tail
                break
            }
            currentNode = currentNode.next // Move to the next node
        }

        // Set the next pointer of the new last node to null (end of the list)
        newLastNode.next = null
        this.tail = newLastNode // Update the tail to the new last node
        this.length-- // Decrement the length of the list

        return lastNode // Return the removed node (old tail)
    }
}

// Create a new SinglyLinkedList instance
let list = new SinglyLinkedList()

// Add some values to the list using push()
list.push(5)
list.push(10)
list.push(15)
list.push(20)

// Remove the last element from the list using pop()
list.pop()
console.log(list)