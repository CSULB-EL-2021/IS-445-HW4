const input = prompt("Enter a world");

function getNbrOfVowels(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  return input.toLowerCase().reduce((acc, k) => vowels.includes(k) ? acc++ : '')
}

function isPalindrome(input) {
  const reverse = input.toLowerCase().split('').reverse().join('')
  return input.toLowerCase() === reverse
}

if (isPalindrome(input)) {
  console.log(`${input} contains ${getNbrOfVowels(input)} vowels and is a palindrome`)
} else {
  console.log(`${input} contains ${getNbrOfVowels(input)} vowels and is not a palindrome`)
}
