let a=prompt("Enter a number , you want to find two digit divider: ");
a=parseInt(a);
let arr=[];
for (let i = 10; i < 100; i++) {
    if(i%a==0)
        {
            arr.push(i);
        }
}
document.write("<br> Array: ",arr);