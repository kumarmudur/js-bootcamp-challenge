// ------------ Directions ------------
// Implement a queue datastructure using two stacks
// do not create an array inside of the queue class
// queue should implement the methods 'add', 'remove', 'peek'
// For a reminder on what each method does, look back
// at the Queue excercise
// --------- Examples --------
// const q = new Queue();
// q.add(1);
// q.add(2);
// q.peek() // returns 1;
// q.remove() // returns 1
// q.remove() // returns 2;

const Stack = require('../stack');

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record);
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();
        while (this.second.peek()) {
            this.first.push(this.second.pop());
        }

        return record;
    }
 }