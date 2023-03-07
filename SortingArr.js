// Sorting of Array -- ascending order
function sortArr(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] < arr[i]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let arr = [1,4,3,2,5,0];
console.log(sortArr(arr));


// Sorting of Array -- descending order
function sortNewArr(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=i+1; j<arr.length; j++){
            if(arr[j] > arr[i]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
let Newarr = [1,4,3,2,5,0];
console.log(sortNewArr(Newarr));

