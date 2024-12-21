const question=[
    {
        'que': 'Which of the following markup language', //our question
        'a':'HTML', //1st option
        'b':'CSS',  //2nd option
        'c':'JAVASCRIPT',  //3rd option
        'd':'PYTHON',   //4th option
        'correct':'a'    //correct answer
    },
    {
        'que': 'C Developer  Name',   //same here
        'a':'Denish bilgay',
        'b':'Denish Rithchi',
        'c':'Tenish Ball',
        'd':'Ashfak Alam',
        'correct':'b'
    },
    {
        'que': 'HTML stands for',  //same here
        'a':'Hyper Text Manipulation Language',
        'b':'Hybrid Textual Markup Language',
        'c':'Hyper Text Markup Language',
        'd':'All',
        'correct':'c'
    },
    {
        'que': 'Output of this code \n #include<stdio.h> \n int main() \n { \n int a=5,b=4; \n printf("%d",a+b); \n return 0; \n }', //same here
        'a':'6',
        'b':'7',
        'c':'8',
        'd':'9',
        'correct':'d'
    },
     //add few new question
     {
        'que': 'Which keyword not use for integer?',
        'a':'int',
        'b':'float',
        'c':'long',
        'd':'All of these',
        'correct':'b'
     },
     //yaha pe aur bhi question add kar sakte hai braces ke baad comma lagana jaruri hai
     {
        'que':'Which keyword use for floating point veriable in c?',
        'a':'float',
        'b':'int',
        'c':'char',
        'd':'All of these',
        'correct':'a'
     }
     //Agar ye last question hai to yaha curly braces end hone pe comma nahi hoga
]

let index=0;
let total=question.length;
let right=0;  //correct answer
let wrong=0;   //incorrect answer
const quesBox = document.getElementById("quesbox")
const optionInputs=document.querySelectorAll('.option')
function loadquestion() {
    if(index==total)
        {
            return endQuiz();
        }
    reset();
    const data=question[index]
    quesBox.innerText=` ${index+1})${data.que}`;  //question load hoga
    optionInputs[0].nextElementSibling.innerHTML=data.a;  //option 1
    optionInputs[1].nextElementSibling.innerHTML = data.b; //option 2
    optionInputs[2].nextElementSibling.innerHTML = data.c; //option 3
    optionInputs[3].nextElementSibling.innerHTML = data.d;  //option 4
}
const submitQuiz = () => {
    const data=question[index];
    const ans = getanswer()
    if(ans==data.correct)
        {
            right++;  //if select option == correct then right +1
        }
        else{
            wrong++;  //else wrong +1
        }
        index++;
        loadquestion();  //function call
        return;
}
const getanswer =() =>{
    let answer;
    optionInputs.forEach  /// foreach loop use access all element in array 
    (
        (input )=>{
            if(input.checked)
                {
              answer=input.value;
                }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach  //foreach loop use access all element in array
    (
        (input)=>{
            input.checked=false
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML =`  <h3>Thanks You for Playing Quiz</h3> <br> 
    <h2>${right}/${total} are correct </h2>`
}

loadquestion();