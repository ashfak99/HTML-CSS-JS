function max(arrays) {
    for (let i = 0; i<array.length; i++) {
       if (array[i]>array[i+1]) {
        let temp;
        temp=array[i];
        array[i]=array[i+1];
        array[i+1]=temp;
       }
    }
   let maxValue=array[array.length-1];
   return maxValue;
}
document.write("Maximum Values logic");

const arr=[]
let num;
for (let i = 0; i < 5; i++) {
    num=prompt("Enter a Number: ");
    num=parseInt(num);
    arr.push(num);
}
maxValue1=max(arr);
document.write("Maximum Values: "+maxValue1);