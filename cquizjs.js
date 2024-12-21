const question=[
    {
        'que':'Developer of `c` language is ',
        'a':'Dennis Richie',
        'b':'Bill Gates',
        'c':'Ken Thompson',
        'd':'Peter Norton',
        'correct':'a'
    },
    {
        'que':'C language developed in',
        'a':'1970',
        'b':'1976',
        'c':'1972',
        'd':'1980',
        'correct':'c'
    },
    {
        'que':'C is which level language',
        'a':'High',
        'b':'Middle',
        'c':'Low',
        'd':'Machine',
        'correct':'b'
    },
    {
        'que':'Which symbol is used for pre-processor statement? ',
        'a':'!',
        'b':'#',
        'c':'~',
        'd':';',
        'correct':'b'
    },
    {
        'que':'How many Keyword in C',
        'a':'10',
        'b':'22',
        'c':'32',
        'd':'42',
        'correct':'c'
    },
    {
        'que':'C us support the following operating system',
        'a':'Unix',
        'b':'Window',
        'c':'Linux',
        'd':'All of those',
        'correct':'d'
    },
    {
        'que':'Which is the type of int',
        'a':'Int',
        'b':'Unsigned Int',
        'c':'Long',
        'd':'All of above',
        'correct':'d'
    },
    {
        'que':'Which is not the fundamental data types.',
        'a':'Char',
        'b':'Array',
        'c':'Int',
        'd':'Float',
        'correct':'b'
    },
    {
        'que':'Which is invalid identifiers name',
        'a':'Pushpq',
        'b':'_pushp',
        'c':'1Pushp',
        'd':'pushp_infotech',
        'correct':'c'
    }
]

let index=0;
let total=question.length;
let right=0;
let wrong=0;
const quesBox = document.getElementById("quesbox")
const optionInputs=document.querySelectorAll('.option')
function loadquestion() {
    if(index==total)
        {
            return endQuiz();
        }
    reset();
    const data=question[index]
    quesBox.innerText=` ${index+1})${data.que}`;
    optionInputs[0].nextElementSibling.innerHTML=data.a;
    optionInputs[1].nextElementSibling.innerHTML = data.b;
    optionInputs[2].nextElementSibling.innerHTML = data.c;
    optionInputs[3].nextElementSibling.innerHTML = data.d;
}
const submitQuiz = () => {
    const data=question[index];
    const ans = getanswer()
    if(ans==data.correct)
        {
            right++;
        }
        else{
            wrong++;
        }
        index++;
        loadquestion();
        return;
}
const getanswer =() =>{
    let answer;
    optionInputs.forEach
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
    optionInputs.forEach
    (
        (input)=>{
            input.checked=false
        }
    )
}

const endQuiz = () => {
    document.getElementById('box').innerHTML =`  <h3>Thanks You for Playing Quiz</h3> <br> 
    <h2>${right}/${index+1} are correct </h2>`
}

loadquestion();