function min(arrays) {
    let minIndex=0
    for (let i = 0; i < array.length; i++) {
       if (array[minIndex]>array[i]) {
        minIndex=i;
       }
    }
    return array[minIndex];
}
let array=[];
let num;
for (let i = 0; i < 5; i++) {
num=prompt("Enter a Number: ");
num=parseInt(num);
array.push(num);
}
document.write("Array: "+array)
minValue1=min(array);  
document.write("<br>Minimum Values: "+minValue1);  
document.write("<br>Minimum Values logic");
    