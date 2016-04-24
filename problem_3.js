/*What is the largest prime factor of the number 600851475143 ?*/

var num = 600851475143;
var array =[];

for(var i=2; i <= num; i++) {
    while(num % i === 0) {
        array.push(i);
        num/= i;
    }
}

console.log(Math.max.apply(null,array)); 