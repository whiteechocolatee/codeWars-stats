// function digitize(n) {
//   let arr1 = [];
//   let arr = n
//     .toString()
//     .split("")
//     .map((p) => parseInt(p));
//   for (let i = arr.length - 1; i >= 0; i--) {
//     arr1.push(arr[i]);
//   }
//   console.log(arr1);
// }

// document.querySelector(".touchMe").onclick = digitize;

// digitize(465935473453475);
// ====================================================================================
// let arr = [];

// function sum(numbers) {
//   "use strict";
//   let x = 0;
//   numbers.map((el) => (x += el));

//   // if (numbers.length != 0) {
//   //   return x;
//   // } else {
//   //   return 0;
//   // }

//   return numbers.length != 0 ? x : 0;
// }

// console.log(sum(arr));
// ====================================================================================

// let arr = [
//   "3",
//   "123124234",
//   undefined,
//   "needle",
//   "world",
//   "hay",
//   2,
//   "3",
//   true,
//   false,
// ];

// function findNeedle(haystack) {
//   let out = 0;
//   haystack.map(function (el, i) {
//     if (el == "needle") {
//       out = i;
//     }
//   });
//   return out;
// }

// findNeedle(arr);

// ====================================================================================

// repeatStr(5, "Hello");

// function repeatStr(n, s) {
//   let out = "";
//   for (let i = 0; i < n; i++) {
//     out += s;
//   }

//   return out;
// }

// const repeatStr = (n, s) => s.repeat(n);

// ====================================================================================

// function maps(x) {
//   return x.map((el) => el * 2);
// }

// maps([1, 2, 3, 4, 5, 6]);

// ====================================================================================

// function findSmallestInt(args) {
//   let m = Math.min(...args);

//   return m;
// }

// findSmallestInt([34, 15, 88, 2]);

// ====================================================================================

// function betterThanAverage(classPoints, yourPoints) {
//   classPoints.push(yourPoints);

//   let a =
//     classPoints.reduce(function (b, c) {
//       return b + c;
//     }) / classPoints.length;

//   return a < yourPoints ? true : false;
// }

// betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9);

// ====================================================================================

// function removeExclamationMarks(s) {
//   return s.replace(/!/g, "");
// }

// removeExclamationMarks("Hello World!");

// ====================================================================================

// function hero(bullets, dragons) {
//   // console.log(dragons * 2 > bullets);
//   console.log(bullets / 2 >= dragons);
//   // return bullets / 2 >= dragons;
// }

// hero(10, 5); // true
// hero(7, 4); // false
// hero(4, 5); // false
// hero(100, 40); // true
// hero(1500, 751); // false
// hero(0, 1); // false

// ====================================================================================

// function century(year) {
//   // return Math.trunc(year / 100);
//   return Math.ceil(year / 100);
// }

// century(1705);
// century(1900);
// century(1601);
// century(2000);
// century(89);

// ====================================================================================

// function getCount(str) {
//   var vowelsCount = 0;
//   let vowels = ["a", "e", "i", "o", "u"];

//   for (let x of str.toLowerCase()) {
//     if (vowels.includes(x)) vowelsCount++;
//   }

//   return vowelsCount;
// }

// getCount("abracadabioueasdkaqwertyuioplkjhgfdsazxcvbnm,ra");

// ====================================================================================

// function sumTwoSmallestNumbers(numbers) {
//   numbers.sort((a, b) => a - b);

//   let res = numbers[0] + numbers[1];

//   console.log(res);
//   return res;
// }

// sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]);
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]);

// ====================================================================================

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// addBinary(5, 9);

// ====================================================================================

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// function makeNegative(num) {
//   if (Math.sign(num) == 0 || Math.sign(num) == -1) {
//     return num;
//   } else {
//     return -num;
//   }
// }

// makeNegative(12);

// ====================================================================================

// function XO(str) {
//   let x = 0;
//   let o = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i].toLowerCase() == "x") {
//       x++;
//     } else if (str[i].toLowerCase() == "o") {
//       o++;
//     }
//   }

//   return o === x;
// }

// XO("xoashdashkdbasdnadooxoxx");

// let findNextSquare = (sq) =>
//   Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;

// ====================================================================================

// function chooseOptimalDistanse(){

// }

// chooseOptimalDistanse()

// const chooseOptimalDistance = (t, k, ls) => {
//   if (ls.length < 3) {
//     return null;
//   }

//   ls = ls.sort((a, b) => a - b);

//   // console.log(ls);

// };

// const threeSum = function (arr, target = 173) {
//   const result = [];
//   let way = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (
//           arr[i] + arr[j] + arr[k] === target &&
//           (!result.flat().includes(arr[i]) ||
//             !result.flat().includes(arr[j]) ||
//             !result.flat().includes(arr[k]))
//         )
//           (result += arr[i]), arr[j], arr[k];
//       }
//     }
//   }
//   let sum = result.map((el) => (way += el));
//   return sum;
// };

// console.log(threeSum([51, 56, 58, 59, 61]));

// console.log(chooseOptimalDistance(174, 3, [12, 155, 51, 56, 58, 59, 61, 5]));

// ====================================================================================

// function filter_list(l) {
//   let arr = [];

//   l.map((el) => {
//     if (typeof el === "number") arr.push(el);
//   });

//   return arr;
// }

// filter_list([1, "a", "b", 0, 15]);
// ====================================================================================
// var isSquare = function (n) {
//   if (n === 0) {
//     return true;
//   } else {
//     return n > 0 && Math.sqrt(n) % 1 === 0;
//   }
// };
// console.log(isSquare(26));

// ====================================================================================

// function litres(time) {
//   console.log(Math.floor(time / 2));
// }

// litres(6.7);

// ====================================================================================

// function smash(words) {
//   let out = "";
//   if (words.length == 0) return '';

//   if (words.length == 1) {
//     return words[0];
//   } else {
//     words.map((el) => (out += `${el} `));
//   }

//   return out.trimEnd();
// }

// console.log(smash(["hello", "amazing", "world"]));

// ====================================================================================

// function countPositivesSumNegatives(input) {
//   let countPos = [];
//   let mainArr = [];
//   let sumNeg = 0;

//   if (input == null || input.length == 0) return mainArr;

//   input.map((el) => {
//     if (el > 0) {
//       countPos.push(el);
//     } else if (el < 0) {
//       sumNeg += el;
//     } else if (el == 0) {
//       return [];
//     }
//   });

//   if (countPos > 0 || sumNeg <= 0) {
//     mainArr.push(countPos.length, sumNeg);
//     return mainArr;
//   } else {
//     return mainArr;
//   }
// }

// // console.log(countPositivesSumNegatives([0, 0, 0, 0, 0, 0, 0]));
// console.log(
//   countPositivesSumNegatives([
//     91,47
//   ])
// );

// ====================================================================================

// function simpleMultiplication(number) {
//   return number % 2 == 0 ? number * 8 : number * 9;
// }

// ====================================================================================

// function countSheeps(arrayOfSheep) {
//   if (arrayOfSheep == null || arrayOfSheep.length == 0) return 0;
//   let sheepsOnPlace = arrayOfSheep.filter((el) => el == true);

//   return sheepsOnPlace.length;
// }

// console.log(countSheeps([]));

// ====================================================================================

// function minMax(arr) {
// //   arr.sort((a, b) => a - b);

//   return [Math.min(...arr),Math.max(...arr)];
// }

// console.log(minMax([6]))

// ====================================================================================

// function opposite(number) {
//   return number > 0 ? number * -1 : Math.abs(number);
// }

// console.log(opposite(12525220));

// ====================================================================================

// function sumMix(x) {
//   let sum = 0;

//   x.map((el) => (sum += +el));

//   return sum;
// }

// console.log(sumMix([9, 3, "7", "3"]));

// ====================================================================================

// function squareSum(numbers) {
//   return numbers.length > 0
//     ? numbers.map((el) => el * el).reduce((a, b) => a + b, 0)
//     : 0;
// }

// console.log(squareSum([1, 2, 2]));

// ====================================================================================

// function arrayDiff(a, b) {
//   let num = [];

//   if (a.length == 0 || b.length == 0) return num;

//   for (let i = 0; i < a.length; i++) {
//     for (let k = 0; k < b.length; k++) {
//       if (a[i] != b[k]) {
//         num.push(a[i]);
//       }
//     }
//   }
//   return num;
// }

// console.log(arrayDiff([1,2,2], []));

// ====================================================================================

// function digital_root(n) {
//   let num = 0;

//   if (n < 10) return n;

//   String(n)
//     .split("")
//     .map((el) => {
//       num += Number(el);
//     });

//   return num > 10 ? digital_root(num) : num;
// }

// console.log(digital_root(5));

// ====================================================================================

// function findUniq(arr) {
//   if (arr.length === 1) return arr[0];
//   return arr.filter(
//     (el, i, array) => array.indexOf(el) === array.lastIndexOf(el)
//   );
// }

// console.log(findUniq([1]));

// ====================================================================================

// function moveZeros(arr) {
//     let resultArray = arr.filter((el) => el !== 0);
//     return resultArray.concat(new Array(arr.length - resultArray.length).fill(0));
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// ====================================================================================

// function positiveSum(arr) {
//   if (arr.length === 0) return 0;
//   if (arr.length === 1 && arr[0] > 0) return arr[0];

//   let init = 0;

//   arr.map((el) => {
//     if (el > 0) {
//       init += el;
//     }
//   });

//   return init;
// }

// console.log(positiveSum([-1,2,3,4,-5]));

// ====================================================================================

// function basicOp(operation, value1, value2) {
//   return eval(`${value1}${operation}${value2}`);
// }

// console.log(basicOp("+", 2, 2));

// ====================================================================================

// function twoOldestAges(ages) {
//   let filterd = ages.sort((a, b) => a - b);
//   let arr = [];
//   arr.push(filterd[filterd.length - 2],filterd[filterd.length - 1]);

//   return arr
// }

// console.log(twoOldestAges([1, 2, 10, 8]));

// ====================================================================================

// function rgb(r, g, b) {
//   rgbToHex = (color) => {
//     if (color < 0) {
//       color = 0;
//     } else if (color > 255) {
//       color = 255;
//     }

//     let hex = color.toString(16);
//     console.log(hex);

//     if (hex.length === 1) {
//       return 0 + hex;
//     } else {
//       return hex;
//     }
//   };

//   let redHex = rgbToHex(r);
//   let greenHex = rgbToHex(g);
//   let blueHex = rgbToHex(b);

//   let hexCode = redHex + greenHex + blueHex;

//   return hexCode.toUpperCase();
// }

// ====================================================================================

// function solution(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// console.log(solution(""));

// ====================================================================================

// function alphanumeric(string) {
//   return /^[0-9a-z]+$/i.test(string);
// }

// ====================================================================================

// function duplicateCount(text) {
//   let obj = {};
//   let arr = [];

//   for (i of text) {
//     i = i.toLowerCase();
//     if (!obj[i]) {
//       obj[i] = 1;
//     } else {
//       obj[i]++;
//     }
//   }

//   for (const key in obj) {
//     if (obj[key] > 1) {
//       arr.push(obj[key]);
//     }
//   }

//   console.log(arr.length);
// }

// duplicateCount("Indivisibiliti");

// ====================================================================================

// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin);
// }

// console.log(validatePIN("123456"));

// ====================================================================================

// function oddOrEven(array) {
//   return array.reduce((a, b) => a + b, 0) % 2 == 0 ? "even" : "odd";

//   //   return sum % 2 == 0 ? "even" : "odd";
// }

// console.log(oddOrEven([0, -1, -4]));

// ====================================================================================

// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseWords("hello world!"));

// ====================================================================================

// function anagrams(word, words) {
//   let arr = [];
//   if (words.length === 0) return arr;

//   words.map((el) => {
//     if (word.split("").sort().join("") === el.split("").sort().join("")) {
//       arr.push(el);
//     }
//   });
//   return arr.length === 0 ? [] : arr;
// }

// console.log(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]));

// let str = "abca";
// let str1 = "abba";

// console.log(str.split("").sort().join(""));
// console.log(str1.split("").sort().join(''));

// console.log(str.split("").sort().join("") === str1.split("").sort().join(""));

// ====================================================================================

// function findOdd(a) {
//   if (a.length === 0) return 0;

//   let result = {};
//   let odd;

//   a.map(function (a) {
//     if (result[a] == undefined) result[a] = 1;
//     else result[a]++;
//   });

//   for (const key in result) {
//     if (result[key] % 2 !== 0) {
//       odd = key;
//     }
//   }

//   return +odd;
// }

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));

// ====================================================================================

// function noSpace(x) {
//   //   return x.split(" ").join('');
//   return x.replace(/\s/g, "");
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// ====================================================================================

// function narcissistic(value) {
//   if (value <= 0 || typeof value === "string") return false;

//   let val = String(value).split("");

//   let pow = val.length;

//   let out = 0;

//   val.forEach((el) => {
//     out += Math.pow(Number(el), pow);
//   });

//   return out === value ? true : false;
// }

// console.log(narcissistic(371));

// ====================================================================================

// function humanReadable(seconds) {
//   if (seconds < 0 || seconds > 360000) {
//     return null;
//   }

//   let hours = Math.floor(seconds / 3600);

//   seconds -= hours * 3600;

//   if (hours < 10) {
//     hours = "0" + hours;
//   }

//   let minutes = Math.floor(seconds / 60);

//   seconds -= minutes * 60;
//   if (minutes < 10) {
//     minutes = "0" + minutes;
//   }

//   if (seconds < 10) {
//     seconds = "0" + seconds;
//   }

//   return hours + ":" + minutes + ":" + seconds;
// }

// console.log(humanReadable(2344));

// ====================================================================================

// let times = 0;

// function persistence(num) {
//   let i = 0;

//   while (num.toString().length !== 1) {
//     num = num
//       .toString()
//       .split("")
//       .reduce((a, b) => a * b);
//     i++;
//   }

//   return i;
// }

// console.log(persistence(999));

// ====================================================================================

// function bmi(weight, height) {
//   let bmiFunc = Math.ceil(weight / Math.pow(height, 2));

//     console.log(bmiFunc);

//   if (bmiFunc <= 18.5) {
//     return "Underweight";
//   } else if (bmiFunc > 18.5 && bmiFunc <= 25) {
//     return "Normal";
//   } else if (bmiFunc > 25 && bmiFunc <= 30) {
//     return "Overweight";
//   } else if (bmiFunc > 30) {
//     return "Obese";
//   }
// }

// console.log(bmi(80, 1.8));

// ====================================================================================

// function fakeBin(x) {
//   return x.replace(/[1234]/g, "0").replace(/[56789]/g, "1");
// }

// console.log(fakeBin("123456789"))

// ====================================================================================

// function friend(friends) {
//   return friends.filter((el) => el.length === 4);
// }

// console.log(friend(["lera", "denis", "richard", "jmih"]));

// ====================================================================================

// function findShort(s) {
//   let arr = s.split(" ").map((el) => el.length);

//   return Math.min(...arr)
// }

// console.log(findShort("Let's travel abroad shall we"));

// ====================================================================================

// function solution(str, ending) {
//   return str.endsWith(ending);
// }

// console.log(solution("abc", "bc"));

// ====================================================================================

// function isIsogram(str) {
//   let stringArr = str.split("").map((el) => el.toLowerCase());
//   let newSet = new Set(stringArr);

//   return newSet.size === stringArr.length ? true : false
// }

// console.log(isIsogram("Dermatoglyphics"));

// ====================================================================================

// function highAndLow(numbers) {
//   let arrOfStr = numbers.split(" ");
//   return `${Math.max(...arrOfStr)} ${Math.min(...arrOfStr)}`;
// }

// console.log(highAndLow("1 9 3 4 -5"));

// ====================================================================================

// var number = function (busStops) {
//   let get = 0;

//   busStops.map((el) => {
//     get += el[0];
//     get -= el[1];
//   });

//   return get;
// };

// console.log(
//   number([
//     [3, 0],
//     [9, 1],
//     [4, 10],
//     [12, 2],
//     [6, 1],
//     [7, 10],
//   ])
// );

// ====================================================================================

// function isPangram(string) {
//   return new Set(string.toUpperCase().match(/[A-Z]/g)).size === 26;
// }

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

// ====================================================================================

// function getMiddle(s) {
//   let stringArr = s.split("");

//   while (stringArr.length > 2) {
//     stringArr.pop();
//     stringArr.shift();
//   }

//   return stringArr.join("");
// }

// console.log(getMiddle("middle"));

// ====================================================================================

// function invert(array) {
//   return array.map(el => el >= 0 ? -el : Math.abs(el));
// }

// console.log(invert([1, 0, 3, 4, 5]));

// ====================================================================================

// function wave(str) {
//   let waveArray = [];

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     if (letter === " ") {
//       continue;
//     } else {
//       waveArray.push(
//         str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1)
//       );
//     }
//   }

//   return waveArray;
// }

// console.log(wave("hello"));

// ====================================================================================

// function count(string) {
//   let obj = {};

//   for (const i of string) {
//     if (!obj[i]) {
//       obj[i] = 1;
//     } else {
//       obj[i]++;
//     }
//   }

//   return obj;
// }

// console.log(count("aba"));

// ====================================================================================

// function getSum(a, b) {
//   let arr = [a, b];

//   let n = 0;

//   arr.sort((c, d) => c - d);

//   for (let i = arr[0]; i <= arr[1]; i++) {
//     n += i;
//   }
//   return n;
// }

// console.log(getSum(0, -1));

// ====================================================================================

// function towerBuilder(nFloors) {
//   let tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(
//       " ".repeat(nFloors - i - 1) +
//         "*".repeat(i * 2 + 1) +
//         " ".repeat(nFloors - i - 1)
//     );
//   }
//   return tower;
// }

// ====================================================================================

// function likes(names) {
//   switch (names.length) {
//     case 0:
//       return `no one likes this`;
//     case 1:
//       return `${names[0]} likes this`;
//     case 2:
//       return `${names[0]} and ${names[1]} like this`;
//     case 3:
//       return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//     default:
//       return `${names[0]}, ${names[1]} and ${
//         names.length - 2
//       } others like this`;
//   }
// }

// console.log(likes([]));

// ====================================================================================

// function squareDigits(num) {
//   let newNum = num
//     .toString()
//     .split("")
//     .map((el) => Math.pow(Number(el), 2))
//     .join("");

//   return Number(newNum);
// }

// console.log(squareDigits(3212));

// ====================================================================================

// function DNAtoRNA(dna) {
//   return dna.toLowerCase().replace(/t/g, "u").toUpperCase()
// }

// console.log(DNAtoRNA("TTTTTT"));

// ====================================================================================

// function rowSumOddNumbers(n) {
//   let firstDigit = n * n - (n - 1);
//   let ans = 0;
//   let count = 0;

//   while (count < n) {
//     if (firstDigit % 2 !== 0) {
//       ans += firstDigit;
//       count++;
//     }
//     firstDigit++;
//   }
//   return ans;
// }

// console.log(rowSumOddNumbers(42))

// ====================================================================================

// const rps = (p1, p2) => {
//   if (p1 === p2) {
//     return `Draw!`;
//   }
//   if (p1 === "rock" && p2 === "scissors") {
//     return `Player 1 won!`;
//   } else if (p1 === "paper" && p2 === "rock") {
//     return `Player 1 won!`;
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return `Player 1 won!`;
//   } else {
//     return `Player 2 won!`;
//   }
// };

// ====================================================================================

// function greet(name, owner) {
//   return name === owner ? "Hello boss" : "Hello guest";
// }

// console.log(greet("Denis", "Denis"));

// ====================================================================================

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return fuelLeft * mpg >= distanceToPump
// };

// console.log(zeroFuel(50, 25, 2));

// ====================================================================================

// function setAlarm(employed, vacation) {
//   return employed && !vacation;
// }

// ====================================================================================

// function queueTime(customers, n) {
//   let arr = new Array(n).fill(0);

//   for (let i = 0; i < customers.length; i++) {
//     arr[0] += customers[i];
//     console.log(arr.sort((a, b) => a - b));
//   }

//   return arr[arr.length - 1];
// }

// console.log(queueTime([10, 2, 3, 3], 2));

// ====================================================================================

// function points(games) {
//   let total = 0;

//   for (let i = 0; i < games.length; i++) {
//     let x = Number(games[i].split(":")[0]);
//     let y = Number(games[i].split(":")[1]);

//     if (x > y) {
//       total += 3;
//     } else if (x == y) {
//       total += 1;
//     } else {
//       total += 0;
//     }
//   }

//   return total;
// }

// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// );

// ====================================================================================

// var number = function (array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     arr.push(`${i + 1}: ${array[i]}`);
//   }

//   return arr;
// };

// console.log(number(["a", "b", "c"]));

// ====================================================================================

// function cockroachSpeed(s) {
//   return Math.floor(((s * 1000) / 3600) * 100);
// }

// console.log(cockroachSpeed(1.09));

// ====================================================================================

// function doubleChar(str) {
//   return str
//     .split("")
//     .map((el) => el + el)
//     .join("");
// }

// console.log(doubleChar("hello world"));

// ====================================================================================

// function sumArray(array) {
//   if (array && array.length > 1) {
//     const sortedArray = array.sort((a, b) => a - b).slice(1, -1);
//     console.log(sortedArray);
//     return sortedArray.reduce((acc, cur) => acc + cur, 0);
//   }

//   return 0;
// }

// console.log(sumArray([-6, 20, -1, 10, -12]));

// ====================================================================================

// function getAge(inputString) {
//   return Number(inputString[0])
// }

// console.log(getAge("4 years old"));

// ====================================================================================

// function removeEveryOther(arr) {
//   // let array = [];

//   // for (let i = 0; i < arr.length; i++) {
//   //   if (i % 2 === 0) {
//   //     array.push(arr[i]);
//   //   }
//   // }

//   // return array;

//   return arr.filter((element, index) => {
//     return index % 2 == 0;
//   });
// }

// console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

// ====================================================================================

// function updateLight(current) {
//   switch (current) {
//     case "yellow":
//       return "red";
//     case "red":
//       return "green";
//     case "green":
//       return "yellow";
//   }
// }

// console.log(updateLight("red"));

// ====================================================================================

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - sonYearsOld * 2);
// }

// console.log(twiceAsOld(43, 21));

// ====================================================================================

// function twoSum(numbers, target) {
//   let arrIndex = [];

//   for (let i = 0; i < numbers.length; i++) {
//     for (let k = i + 1; k < numbers.length; k++) {
//       if (numbers[i] + numbers[k] === target) {
//         arrIndex.push([i][0], [k][0]);
//       }
//     }
//   }

//   return arrIndex;
// }

// console.log(twoSum([1, 2, 3], 4));

// ====================================================================================

// function getGrade(s1, s2, s3) {
//   let grade = Math.floor((s1 + s2 + s3) / 3);

//   if (grade <= 100 && grade >= 90) {
//     return "A";
//   } else if (grade <= 90 && grade >= 80) {
//     return "B";
//   } else if (grade <= 80 && grade >= 70) {
//     return "C";
//   } else if (grade <= 70 && grade >= 60) {
//     return "D";
//   } else if (grade < 60) {
//     return "F";
//   }
// }

// console.log(getGrade(100, 85, 96));
// console.log(getGrade(70, 70, 100));
// console.log(getGrade(70, 70, 70));
// console.log(getGrade(66, 62, 68));
// console.log(getGrade(48, 55, 52));

// ====================================================================================

// function grow(x) {
//   return x.reduce((curr, prev) => {
//     return curr * prev;
//   });
// }

// console.log(grow([1, 2, 3]));

// ====================================================================================

// function countSmileys(arr) {
//   return arr.filter((el) => el.match(/(:|;)(-|~)?(\)|D)/)).length;
// }

// console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]));

// ====================================================================================

// function isDivideBy(number, a, b) {
//   return number % a == 0 && number % b == 0 ? true : false;
// }

// console.log(isDivideBy(-12, 2, -6));

// ====================================================================================

// function rot13(message) {
//   let string = "";

//   for (let i = 0; i < message.length; i++) {
//     if (message[i].charCodeAt() <= 109 && message[i].charCodeAt() >= 97) {
//       string += String.fromCharCode(message[i].charCodeAt() + 13);
//     } else if (
//       message[i].charCodeAt() > 109 &&
//       message[i].charCodeAt() <= 122
//     ) {
//       string += String.fromCharCode(message[i].charCodeAt() - 13);
//     } else if (message[i].charCodeAt() <= 77 && message[i].charCodeAt() >= 65) {
//       string += String.fromCharCode(message[i].charCodeAt() + 13);
//     } else if (message[i].charCodeAt() >= 77 && message[i].charCodeAt() <= 90) {
//       string += String.fromCharCode(message[i].charCodeAt() - 13);
//     } else if (message[i].charCodeAt() === 32) {
//       string += message[i];
//     } else if (message[i].charCodeAt() >= 33 && message[i].charCodeAt() <= 64) {
//       string += message[i];
//     }
//   }

//   return string;
// }

// console.log(rot13("Test"));

// ====================================================================================

// function countBy(x, n) {
//   const z = [];

//   for (let i = 1; i <= x * n; i++) {
//     if (i % x === 0) z.push(i);
//   }

//   return z;
// }

// console.log(countBy(2, 5));

// ====================================================================================

// function twoSort(s) {
//   return s.sort()[0].split("").join("***");
// }

// console.log(
//   twoSort([
//     "turns",
//     "out",
//     "random",
//     "test",
//     "cases",
//     "are",
//     "easier",
//     "than",
//     "writing",
//     "out",
//     "basic",
//     "ones",
//   ])
// );

// ====================================================================================

// function expressionMatter(a, b, c) {
//   let one = a * (b + c);
//   let two = a * b * c;
//   let three = a + b * c;
//   let four = (a + b) * c;
//   let five = a + b + c;

//   let arr = [one, two, three, four, five];

//   return Math.max(...arr);
// }

// console.log(expressionMatter(1, 1, 1));

// ====================================================================================

// String.prototype.toAlternatingCase = function () {
//   return this.split("")
//     .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//     .join("");
// };

// console.log("hello world".toAlternatingCase());

// ====================================================================================

// function solution(str) {
//     return str.replace(/([A-Z])/g, ' $1');

// }

// console.log(solution("camelCasing"));

// ====================================================================================

// String.prototype.toJadenCase = function () {
//   let string = "";

//   this.split(" ").forEach((el) => {
//     string = string + " " + el.substring(0, 1).toUpperCase() + el.substring(1);
//   });

//   return string.substring(1);
// };

// console.log("How can mirrors be real if our eyes aren't real".toJadenCase());

// ====================================================================================

// function gimme(triplet) {
//   let sorted = [...triplet].sort((a, b) => a - b);
//   return triplet.indexOf(sorted[1])
// }

// console.log(gimme([2, 3, 1]));

// ====================================================================================

// function index(array, n) {
//   for (let i = 0; i < array.length; i++) {
//     if (n == i) {
//       return Math.pow(array[i], n);
//     }
//   }
//   return -1;
// }

// console.log(index([1, 2, 3, 4], 2));

// ====================================================================================

// function feast(beast, dish) {
//   return (
//     beast[0] === dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
//   );
// }

// ====================================================================================

// function comp(array1, array2) {
//  if(!array1 || !array2 || array1.length !=array2.length ) return false
//  return array1.map((el) => el * el).sort((a, b) => a - b).toString() === array2.sort((a,b)=>a-b).toString();
// }

// let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// let a2 = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19,
// ];

// console.log(comp(a1, a2));

// ====================================================================================

// function isPalindrome(x) {
//   return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
// }

// console.log(isPalindrome("Bob"));

// ====================================================================================

// function strCount(str, letter) {
//   return str.toLowerCase().split("").filter((el) => {
//    return el == letter;
//   }).length
// }

// console.log(strCount("Hello", "o"));

// ====================================================================================

// var isAnagram = function (test, original) {
//     return test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join()
// };

// console.log(isAnagram("foefet", "toffee"));

// ====================================================================================

// function getDivisorsCnt(n) {
//   let arr = [];

//   for (let i = 0; i <= n; i++) {
//     if (n % i == 0) {
//       arr.push(i);
//     }
//   }

//   return arr.length
// }


// console.log(getDivisorsCnt(30));