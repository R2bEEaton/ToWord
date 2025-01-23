# ToWord
A small javascript function to convert numbers to, without modification^, numbers as large as 99,999,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000 to easy to read numbers like 10 Quattuorcentillion.

^To break this limit, simply add more values from http://www.olsenhome.com/bignumbers/ to the array found in ToWord.js.

Logic Section:

"number" is an integer that you want converted into words.
"placevalues" is an array with the values "blank, hundred, thousand..."

Let number = 2345.

Take "number", turn it into a string and find the length, divide the length by 3, and get the remainder. In this case, 1.
If the remainder is 0, set a variable "length" to "number"'s length minus ("number"'s length minus 3). This is not required in this case. 
Set "rl" to the length of "number" minus "length". In this case, 3. (4 - 1)    
[round is a function that rounds an integer to 2 decimal places]
Set "d" to round(number/(10^rl)). In this case, (10^rl) = 1000, so "d" = round(2.345) or 2.34.
Set "pre" to Math.round(number/(10^rl)). In this case, 2.
If the length of "pre" is greater than 3, repeat all of the steps, replacing "pre" with "number", and add one to a variable holding "rl"/3.
Then return d + the "rl/3" value of the array holding the place values. In this case, "2.34 thousand".
