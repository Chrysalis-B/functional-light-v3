"use strict";

// inception!
curry = curry(2, curry);

const nums = {
	first: [3, 5, 2, 4, 9, 1, 12, 3],
	second: [5, 7, 7, 9, 10, 4, 2],
	third: [1, 1, 3, 2]
};

const filteredNums = filterObj(function (list) {
	return isOdd(listSum(list));
}, nums);

const filteredNumsProducts = mapObj(function (list) {
	return listProduct(list);
}, filteredNums);

const reducedObj = reduceObj(function (acc, v) {
	return acc + v;
}, 0, filteredNumsProducts);
// 38886
console.log('🚀 ~ file: ex.js ~ line 25 ~ reducedObj ~ reducedObj', reducedObj);


// ************************************

function mapObj(mapperFn, obj) {
	const newObj = {};
	const keys = Object.keys(obj);
	for (const key of keys) {
		newObj[key] = mapperFn(obj[key]);
	}
	return newObj;
}

function filterObj(predicateFn, obj) {
	const newObj = {};
	const keys = Object.keys(obj);
	for (const key of keys) {
		if (predicateFn(obj[key])) {
			newObj[key] = obj[key];
		}
	}
	return newObj;
}

function reduceObj(reducerFn, initialValue, obj) {
	let result = initialValue;
	const values = Object.values(obj);
	for (const value of values) {
		result = reducerFn(result, value);
	}
	return result;
}


// ************************************

function curry(arity, fn) {
	return (function nextCurried(preconstgs) {
		return function curried(nextArg) {
			const args = preconstgs.concat([nextArg]);
			if (args.length >= arity) {
				return fn(...args);
			}
			else {
				return nextCurried(args);
			}
		};
	})([]);
}
function compose(...fns) {
	return function composed(arg) {
		return fns.reduceRight((result, fn) => fn(result), arg);
	};
}
function pipe(...fns) {
	return compose(...fns.reverse());
}
function binary(fn) {
	return function two(arg1, arg2) {
		return fn(arg1, arg2);
	};
}


// ************************************

function isOdd(v) { return v % 2 == 1; }
function sum(x, y) { return x + y; }
function mult(x, y) { return x * y; }
function listSum(list) { return list.reduce(sum, 0); }
function listProduct(list) { return list.reduce(mult, 1); }
