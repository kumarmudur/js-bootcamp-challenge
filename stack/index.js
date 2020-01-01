// ---------- Directions -------------
// create a stack data structure. The Stack
// should be a class with methods 'push', 'pop' and 'peek'
// Adding an element to the stack should 
// store it until it is removed
// ------ examples ----------
// const s = new Stack();
// s.push(1);
// s.push(2);
// s.pop(); // returns 2
// s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1]; 
    }
}
