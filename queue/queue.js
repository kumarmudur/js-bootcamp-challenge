// --------- Description---------------
// create a queue data structure. The queue
// should be class with methods add and remove
// adding to the queue should store an element until
// it is removed
// ----------- Examples ----------
// const q = new Queue();
// q.add(1);
// q.remove(); //remove 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(val) {
        this.data.unshift(val);
    }

    remove() {
        this.data.pop();
    }

    peek() {
        this.data[this.data.length - 1];
    }
}

module.exports = Queue;