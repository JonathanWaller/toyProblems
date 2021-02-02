1. Given a number, return 'Even' if it is an even number...'Odd' if it is odd


function even_or_odd(number) {
  if (number%2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

2. Very simple, given a number, find its opposite.

function opposite(number) {
  return -number;
}

3. Complete the solution so that it reverses the string passed into it.

function solution(str){
  return str.split('').reverse().join('')
}

4. Goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. 
You don't have to worry with strings with less than two characters.

function removeChar(str){
  let arr = [];
  arr = str.split('');
  arr.shift();
  arr.pop();
  return arr.join('');
};

OR

function removeChar(str) {
  return str.slice(1, -1);
}

OR

function removeChar(str){
 return str.substring(1, str.length-1);
};

5. Write a function called repeat_str which repeats the given string src exactly count times.

function repeatStr (n, s) {
  let count = 0;
  let arr = [];
  while( count < n ) {
    arr.push( s );
    count ++
  }
  return arr.join('');
}

OR

function repeatStr (n, s) {
  return s.repeat(n);
}

OR

function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}

6. We need a function that can transform a number into a string.

function numberToString(num) {
  return num.toString();
}

OR

function numberToString(num) {
  return String(num);
}


7. Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let num;
    for( let x of args ) {
      if( !num || num > x ) {
        num = x;
      }
    }
    return num;
  }
}

8. Remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split('').filter(e=>e.trim()).join('')
}

OR

function noSpace(x){
  return x.split(' ').join('') 
}

OR

str = str.replace(/\s/g, '');

9. Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
  let sum = 0;
  for( let i=1; i<=num; i++ ) {
    sum += i
  }
  return sum;
}

OR

function summation(num) {
  return num * (num + 1) / 2
}

10. Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
  let sum = 0;
  for( let x of numbers ) {
    sum += x*x;
  }
  return sum;
}

OR 

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

11. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).


function countSheeps(arrayOfSheep) {
  let sum = 0;
  for( let x of arrayOfSheep ) {
    if( x !== false && x !== null && x !== undefined ) {
      sum++;
    }
  }
  return sum;
}

OR

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for( i=0; i<arrayOfSheep.length; i++ ) {
    if( arrayOfSheep[i] === true ) {
      sum ++;
    }
  }
  return sum;
}