function reverseWords(s){
    s = s.split(' ');

    var revStr =' ';
    for(let i=s.length-1; i>=0; i--){

        if(s[i] == ''){
            continue;
        }

        if(revStr.length > 0){
            revStr += ' ';
        }

        revStr += s[i];
    }
    return revStr;
}
console.log(reverseWords("This is Lakshman")); // OP: Lakshman is This