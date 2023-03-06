//Find Duplicate character in string
function FindDuplicate(str){
    var count = {};

    for(let i=0; i<str.length; i++){
        count[str[i]] = 0;
    }

    for(let i=0; i<str.length; i++){
        count[str[i]]++;
    }

    for(let val in count){
        if(count[val] > 1){
            console.log(val + ',' + 'count = ' + count[val]);
        }
    }
}
var string = 'Hello';
FindDuplicate(string);