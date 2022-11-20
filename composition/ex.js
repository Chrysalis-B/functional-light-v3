"use strict";

function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

const compose = (...args) => {
  return pipe(...args.reverse())
}

const pipe = (...args) => {
  return (value) => {
		for (let arg of args) {
			value = arg(value);
		}
		return value;
	};
}

const f1 = compose(increment, decrement);
const f2 = pipe(decrement, increment);
const f3 = compose(decrement, double, increment, half);
const f4 = pipe(half, increment, double, decrement);
const f5 = compose(increment);
const f6 = pipe(increment);

console.log(f1(3) === 3);
console.log(f1(3) === f2(3));
console.log(f3(3) === 4);
console.log(f3(3) === f4(3));
console.log(f5(3) === 4);
console.log(f5(3) === f6(3));
