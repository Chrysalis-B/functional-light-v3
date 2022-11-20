"use strict";

function strBuilder(str) {
	return value => {
		if (typeof value !== 'string') return str;
		else return strBuilder(`${str}${value}`);
	}
}

const hello = strBuilder("Hello, ");
const kyle = hello("Kyle");
const susan = hello("Susan");
const question = kyle("?")();
const greeting = susan("!")();

console.log(strBuilder("Hello, ")("")("Kyle")(".")("")() === "Hello, Kyle.");
console.log(hello() === "Hello, ");
console.log(kyle() === "Hello, Kyle");
console.log(susan() === "Hello, Susan");
console.log(question === "Hello, Kyle?");
console.log(greeting === "Hello, Susan!");
