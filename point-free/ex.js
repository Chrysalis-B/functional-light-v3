"use strict";

const not = (fn) => {
	return (...args) => {
		return !fn(...args);
	}
}

const when = (fn) => {
	return (predicate) => {
		return (...args) => {
			if (predicate(...args)) {
				return fn(...args);
			}
		}
	}
}

const output = console.log;

const printIf = when(output);

const isShortEnough = (str) => {
	return str.length <= 5;
}

const isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
