// To reverse elements in array -- By using new Array
function ReverseArr(arr){
    let newArr = [];
    for(var i=arr.length-1; i>=0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}
let arr = [1,2,3,4,5,6];
console.log(ReverseArr(arr)); // OP: [6,5,4,3,2,1]


// To reverse elements in array -- By using same Array
function ReverseNewArr(arr){
    let first = 0;
    let last = arr.length-1;

    while(first < last){
        var temp = arr[first];
        arr[first] = arr[last];
        arr[last] = temp;
        first++;
        last--;
    }

    return arr;
}
let newArr = [1,2,3,4,5,6,7];
console.log(ReverseNewArr(newArr)); // OP: [7,6,5,4,3,2,1]