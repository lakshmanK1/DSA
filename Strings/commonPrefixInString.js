function prefixStr(arr){
    let firstStr = arr[0];

    let temp = '';
    for(var i=1; i<arr.length; i++){
        for(var j=0; j<firstStr.length; j++){
            if(firstStr[j] == arr[i][j]){
                temp += firstStr[j];
            }
            else{
                break;
            }
        }
        firstStr = temp;
        temp = ''; 
    }
    return firstStr;
}
let array = ["prepare","preload", "precise","preach"];
console.log(prefixStr(array));
