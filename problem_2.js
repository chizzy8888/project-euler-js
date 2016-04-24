/*By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

var sum = 0;
var a = 1;
var b = 2;
var temp;

while (b < 4000000) {
	if (b % i === 0 ) {
		sum+=b;
		}
	temp = b;
	b += a;
	a = temp;
}

console.log(sum);