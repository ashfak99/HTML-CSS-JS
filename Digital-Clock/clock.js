let hrs=document.getElementById("hor");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

var dayss=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];

let currentDate = new Date();

setInterval(()=>{
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)

document.getElementById('dates').innerHTML = (dayss[currentDate.getDay()]+ "," + currentDate.getDate() + ' ' + months[currentDate.getMonth()]+' '+ currentDate.getFullYear());