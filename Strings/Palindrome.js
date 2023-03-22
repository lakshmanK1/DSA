// To check given string is palindrome or not.
function Palindrome(str){
    var a = 0;
    var b = str.length-1;

    while(a < b){
        if(str[a] !== str[b]){
            return 'It is not a Palindrome';
        }

        a++;
        b--;
    }
    return 'It is a Palindrome';
}
var string = 'abca';
console.log(Palindrome(string)); // OP: It is a Palindrome