// To find max element in array
function MaxEle(arr){
    let max = arr[0];

    for(var i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let maxArr = [2,3,1,6,5,9,7,4];
console.log(MaxEle(maxArr)); // OP: 9


// To find min element in array
function MinEle(arr){
    let min = arr[0];

    for(var i=0; i<arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let minArr = [2,4,5,6,8,9,7,1];
console.log(MinEle(minArr));