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
