// let i
// sum=0
// for ( i = 0; i < 10; i++) {
//     sum+=i
// }
// console.log("Sum of ",i, " Numbers is ",sum)
// let i=0.9
// for ( i ; i < 5; i++) {
//     console.log("Ashfak")    
// }

// const hellow=()=>{
//     return "Alam"
// }
// function alam()
// {
//     return "Ashfak"
// }
// let i=0
// do {
//     console.log(hellow())
//     i++
// }while(i<11)

// let a="Ashfak"
// let i=0
// for ( i ; i < a.length; i++) {
//     console.log(a[i])
// }

// let i=3;
// let mul=1;
// while (i>=1) {
//     mul=mul*i;
//     i--;
// }
// console.log("Factorial of 3 =",mul)

// let i=4;
// let mul=1;
// do {
//     mul=mul*i;
//     i--;
// } while (i>=1);
// console.log(mul)
// let mul=1;
// for (let i = 4; i >= 1; i--) {
//     mul=mul*i;
// }
// console.log("Factorial of 4 : ",mul)

// for (let i = 100; i >= 1; i--) {
//     console.log(i)
// }

// let a=prompt("Enter your name")
// console.log(a)

// let num_a=prompt("Please enter a number")
// let num_b=prompt("Please enter a number")
// let num_c=prompt("Please enter a number")

// num_a=Number.parseInt(num_a)
// num_b=Number.parseInt(num_b)
// num_c=Number.parseInt(num_c)

// let d=(num_b*num_b)-(4*num_a*num_c)
// if (d>0) {
//     console.log("Roots are Real")
// }
// else {
//     console.log("Roots are imag.")
// }

// alert("Enter value Carefully")
// let x=prompt("Enter value of X: ");
// let y=prompt("Enter value of Y: ");
// let z=prompt("Enter value of Z: ");
// x=Number.parseInt(x);
// y=Number.parseInt(y);
// z=Number.parseInt(z);
// let a;
// let b;
// let c;
// let d;
// a=(x-y)*(x-y)*(x-y);
// b=(90-z)/34;
// c=54/x;
// d=(a/b)+c-y;
// console.log("Output: ",d)

// alert("Cheak a whether number is +ve or -ve program")
// let a=prompt("Enter the value of A: ");
// a=Number.parseInt(a);
// if (a>0) {
//     console.log(a," is Positive Number");
// }
// else{
//     console.log(a," is Negative Number")
// }

// alert("Add two number if a>50 and b<50")
// let a=prompt("Enter the value of a: ")
// let b=prompt("Enter the value of b: ")
// a=Number.parseInt(a)
// b=Number.parseInt(b)
// if (a>50 && b<50) {
//     console.log("a+b: ",a+b)
// }
// else{
//     console.log("Number is wrong form")
// }

// alert("Please chose any one\n 1.Division of two Number\n 2.Subtraction of three Number\n 3.Multiplication of four Number\n 5.Addition of Five Number\n");
// let ch=prompt("Enter your choice");
// ch=Number.parseInt(ch);
// if (ch==1) {
//     let a=prompt("Enter a number: ")
//     let b=prompt("Enter b number: ");
//     a=Number.parseInt(a)
//     b=Number.parseInt(b);
//     console.log("A/B: ",a/b);
// }
//  else if(ch==2){
//     let a=prompt("Enter a number: ")
//     let b=prompt("Enter b number: ");
//     let c=prompt("Enter c number: ")
//     a=Number.parseInt(a)
//     b=Number.parseInt(b);
//     c=Number.parseInt(c)
//     console.log("A-B-C: ",a-b-c);
// }
// else if (ch==3) {
//     let a=prompt("Enter a number: ")
//     let b=prompt("Enter b number: ");
//     let c=prompt("Enter c number: ")
//     let d=prompt("Enter d number: ")
//     a=Number.parseInt(a)
//     b=Number.parseInt(b);
//     c=Number.parseInt(c)
//     d=Number.parseInt(d)
//     console.log("a*b*c*d: ",a*b*c*d)
// }
// else if(ch==4)
// {
//     let a=prompt("Enter a number: ")
//     let b=prompt("Enter b number: ");
//     let c=prompt("Enter c number: ")
//     let d=prompt("Enter d number: ")
//     let e=prompt("Enter e number: ")
//     a=Number.parseInt(a)
//     b=Number.parseInt(b);
//     c=Number.parseInt(c)
//     d=Number.parseInt(d)
//     e=Number.parseInt(e)
//     console.log("a+b+c+d+e: ",a+b+c+d+e);
// }
// else{
//     console.log("Wrong Choice :!!!!!")
// }
alert("Choose any one\n 1.Area of Circle\n 2.Area of Triangle\n 3.Area of Rectangle\n 4.Area of Square\n");
let ch=prompt("Enter your choice: ")
ch=Number.parseInt(ch)
switch (ch) {
    case 1:
        let r=prompt("Enter radius of circle: ");
        r=Number.parseInt(r);
        console.log("Area of triangle whose radius is ",r," Area = ",3.14*r*r )
        break;
    case 2:
        let b=prompt("Enter the base of triangle: ");
        let h=prompt("Enter the height of triangle: ");
        b=Number.parseInt(b);
        h=Number.parseInt(h)
        console.log("Area of triangle: ",b*h/2);
        break;
    case 3: 
      let l=prompt("Enter the length of rectangle: ")
      let b_=prompt("Enter the breath of rectangle: ")
      l=Number.parseInt(l)
      b_=Number.parseInt(b_)
      console.log("Area of Rectangle: ",l*b_)
      break;
    case 4: 
      let a=prompt("Enter the side of square: ")
      a=Number.parseInt(a);
      console.log("Area of square is: ",a*a)
      break;
    default:
        console.log("wrong choice ")
        break;
}