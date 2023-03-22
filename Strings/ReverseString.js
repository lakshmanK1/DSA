// To reverse an string
function ReverseStr(str){
    str = str.split('');
    var left = 0;
    var right = str.length;

    while(left < right){
        var temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str.join('');
}
var string = "Hello";
console.log(ReverseStr(string)); // olleh