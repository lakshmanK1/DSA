// Re-arrange the negitive numbers in array
function ReArrangeNum(arr){

    let j = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] < 0){
            if(i != j){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
    return arr;
}
let arr = [5,-1,6,-2,1,-7,-5,-3,9,-8,7];
console.log(ReArrangeNum(arr)); // OP: [-1,-2,-7,-5,-3,-8,5,1,9,6,7]