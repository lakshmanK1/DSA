function sumOfTwoNums(X, Y){
    let num1 = BigInt(X);
    let num2 = BigInt(Y);

    let sum = num1+num2;

    return sum.toString();
}
console.log(sumOfTwoNums('50','70')); // OP: 120
