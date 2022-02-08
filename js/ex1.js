/*
 * Ex 1
 */

const nbr1 = Number(prompt("Enter a number"))
const nbr2 = Number(prompt("Enter a number"))
const operator = prompt("Enter an operator")

if (Number.isInteger(nbr1) && Number.isInteger(nbr2)) {
  if (operator === "+") {
      console.log(`${nbr1} + ${nbr2} = ${nbr1 + nbr2}`)
  } else if (operator === "-") {
    console.log(`${nbr1} - ${nbr2} = ${nbr1 - nbr2}`)
  } else if (operator === "*") {
      console.log(`${nbr1} * ${nbr2} = ${nbr1 * nbr2}`)
  } else if (operator === "/") {
      console.log(`${nbr1}/${nbr2} = ${nbr1 / nbr2}`)
  } else {
    console.log("Please enter a valid operator")
  }
} else {
  console.log("Error please two valid numbers")
}
