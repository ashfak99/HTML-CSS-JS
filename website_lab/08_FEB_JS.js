//  let a=47;
//  console.log(a)
//  a="Ashfak"
//  console.log(a)
 
//  let a=prompt("Your age")
//  a=Number.parseInt(a)
//  if (a<0) {
//     console.log("Invalid Age")
//  }
//  else if (a>0 && a<10) {
//     console.log("You are Kid")
//  }
//  else if (a>10 && a<18) {
//     console.log("You are Future of County")
//  }
//  else {
//     console.log("You are eligible for voting")
//  }
alert("Operaotr + - * / only")
let c=prompt("Enter an operator: ")
let a=prompt("Enter a number")
let b=prompt("Enter another Number")
a=Number.parseInt(a)
b=Number.parseInt(b)
switch (c) {
    case '+':
        console.log("a+b=",a+b)
        break;
    case '-':
        console.log("a-b=",a-b)
        break;
    case '*':
        console.log("a*b=",a*b)
        break;
    case '/':
        console.log("a/b=",a/b)
        break;
    default:
        console.log("Wrong Operator!!")
        break;
}