let arr=[];
let num;
for (let i = 0; i < 10; i++) {
  num=prompt("Enter a Number: ");
  num=parseInt(num);
  arr.push(num);
}
for (let j = 0;  j< arr.length; j++) {
    if (arr[j]%2==0) {
        document.write(arr[j]," ");
    }
}