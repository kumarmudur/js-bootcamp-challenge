const Queue = require('./queue');

function weave(srcOne, srcTwo) {
    const q = new Queue();

    while(srcOne.peek() || srcTwo.peek()) {
        if (srcOne.peek()) {
            q.add(srcOne.remove());
        }

        if (srcTwo.peek()) {
            q.add(srcOne.remove());
        }
    }
}