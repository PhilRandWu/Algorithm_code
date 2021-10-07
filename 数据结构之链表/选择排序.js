const arr = [1, 8, 54, 74, 21, 215, 4542, 1121, 512];

function compare(a, b) {
    return a > b;
}

function exchange(arr,a,b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sort(arr) {
    if(arr == null) return
    for(let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
        for(let j=0; j<arr.length - i; j++) {
            if(compare(arr[j],arr[maxIndex])) {
                maxIndex = j;
            }
        }
        console.log(arr[maxIndex],arr[arr.length - 1 -i]);
        exchange(arr,maxIndex,arr.length - 1 - i);
    }
}

sort(arr);
console.log(arr);
