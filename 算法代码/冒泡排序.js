const arr = [1, 8, 54, 74, 21, 215, 4542, 1121, 512];


function exchange(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function compare(a, b) {
    return a > b;
}


function sort(arr) {
    if (arr == null) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1);
            }
        }
    }
}

sort(arr);
console.log(arr);
