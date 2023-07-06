const quizData=[
    {
        question:'How Old is Florin?',
        a:'10',
        b:'20',
        c:'30',
        d:'40',
        correct:'c'
    },
    {
        question:'What is most used programming language?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'Javascript',
        correct:'d'  
    },{
        question:'Who is president of India?',
        a:'Narendra Modi',
        b:'Rahul Gandhi',
        c:'Pandit Neharu',
        d:'Sharad Pawar',
        correct:'a'
    },{
        question:'HTML stands for?',
        a:'Hello Tiger Manipulation Language',
        b:'Hyper Text Markup Language',
        c:'Cascading Style Sheet',
        d:'Jason Object Notation',
        correct:'b'
    },{
        question:'When Javascript launched?',
        a:'1990',
        b:'1995',
        c:'1996',
        d:'None of the above',
        correct:'d'
    }
];
const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a-text");
const b_text=document.getElementById("b-text");
const c_text=document.getElementById("c-text");
const d_text=document.getElementById("d-text");
const submitBtn=document.getElementById("submit");


let i=0;
let score=0;

loadQuiz();

function loadQuiz(){
    deselectedAns()  
    const currentQuizData=quizData[i];
    questionEl.innerText=currentQuizData.question;
    a_text.innerText=currentQuizData.a;
    b_text.innerText=currentQuizData.b;
    c_text.innerText=currentQuizData.c;
    d_text.innerText=currentQuizData.d;
   
}

function getSelected(){
    let answer=undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer=answerEl.id;
        }
    });

    return answer;
}

function deselectedAns(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false;
    });
}

submitBtn.addEventListener("click",()=>{
    //check To See Answer
    const answer=getSelected();
    if(answer){
        if(answer===quizData[i].correct){
            score++;
        }
        i++;
        if(i<quizData.length){
            loadQuiz();
        }else{
            // To Show Result
           quiz.innerHTML=`<h2>You Answered Correctly at ${score}/${quizData.length} questions</h2> <button onclick="location.reload()">Reload</button>`;
           
        }
    } 
});