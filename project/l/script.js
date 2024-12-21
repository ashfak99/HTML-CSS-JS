var text =document.getElementById('text')
var field=document.getElementById('field')

const texts = [
    "Ak Baar Soch Lo",
    "Pakka?",
    "Kuch Soch Ke Decide Karo",
    "Ek Aur Baar Soch Lo!",
    "Aakhri Faisla Hai?",
    "Bahut Pachhtao gi tum",
    "Dubara Mauka Nahi Milega"
];

let currentIndex = 0;

function no() {
    document.getElementById('text').innerHTML = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
}
//document.getElementById('No').onclick = no;

function yes() {
    field.innerHTML="I know You Love Me So Much❤️❤️❤️"
}