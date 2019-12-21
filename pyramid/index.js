// ------- Directions ----------
// write a function that accepts a positive number N.
// the function should console log a pyramid shape
// with N levels using the # character. Make sure the
// stpes has spaces on the right hand side!
// --------- Examples
// pyramid(1)
//     '#'
// pyramid(2)
//     ' # '
//     '###'
// pyramid(3)
//      '  #  '
//      ' ### '
//      '#####'

// solution 1
function pyramid(n) {
    const midPoint = Math.floor((2 * n - 1) / 2);
    for (let row = 0; row < n; row++) {
        let level = '';

        for (let col = 0; col < 2 * n -1; col++) {
            if(midPoint - row <= col && midPoint + row >= col) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

// solution recusrion
function pyramid(n, row = 0, level = '') {
    if (row === n){
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midPoint = Math.floor(( 2 * n - 1) / 2);
    let add;
    if (midPoint - row <= level.length && midPoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

pyramid(3);
