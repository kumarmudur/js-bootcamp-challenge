// ----------- Directions --------
// Implement classes Node and LinkedList 

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
}

module.exports = { Node, LinkedList };