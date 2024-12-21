let arr=[];
let n,n1;
let t;
let a = prompt("Enter the Number of Element in array : ");
a=parseInt(a);
for(let i=0; i<a; i++)
    {
        let temp = prompt("Enter array element : ");
        temp=parseInt(temp);
        arr.push(temp);
    }
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[i]<arr[j]) {
            t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
        } 
    } 
}
document.write("<br>",arr);
if (arr.length%2!=0) 
{
    n=(arr.length+1)/2;
    document.write("<br> Median : ",arr[n-1]);
}
else{
    n=arr.length/2;
    n1=(arr.length/2)+1;
    document.write("<br> Median : ",arr[n-1],",\t",arr[n1-1]);
}