"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(numberToAdd, numbers) {
	if (!numbers.includes(numberToAdd)) {
		numbers = [numberToAdd, ...numbers];
		numbers.sort((a, b) => a - b);
	}
	return numbers;
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	luckyLotteryNumbers = pickNumber(
		lotteryNum(),
		Object.freeze(luckyLotteryNumbers)
	);
}

console.log(luckyLotteryNumbers);
