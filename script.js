// complete the given function

function palindrome(str){
 let str1=str.toLowerCase();
 let str_rev=str1.split("").reverse().join("")
 return str1===str_rev
	
}
module.exports = palindrome
