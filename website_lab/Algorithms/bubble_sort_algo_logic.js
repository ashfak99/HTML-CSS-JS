function bubble(arrays) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j]>array[j+1]) {
            let temp;
            temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
        }
      }
    }
    return array;
}
let array=[];
let num;
for(let i=0; i<5; i++)
 {
        num=prompt("Enter a Number: ");
        num=parseInt(num);
        array.push(num);
 }
 document.write("Array Before Sorting: "+array);
document.write("<br>Array Ater Sorting: "+bubble(array))