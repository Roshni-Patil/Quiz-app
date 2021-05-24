const quizDB = [ 
    {
        question: "1. Point out the correct statement.",
        a: "Least square is an estimation tool",
        b: "Least square problems falls in to three categories" ,
        c: "Compound least square is one of the category of least square" ,
        d: "None of the mentioned" ,
        ans: "ans1"
    }, 
    {
        question: "2.How many principles of analytical graphs exist?" , 
        a: "3" , 
        b: "4" , 
        c: "6" , 
        d: "None of the mentioned  " , 
        ans: "ans3"
    },
    {
        question: "3. Which of the following is not a step in data analysis?" , 
        a: "Obtain the data" , 
        b: "Clean the data" , 
        c: "EDA" , 
        d: "None of the mentioned" , 
        ans: "ans4"
    },

    {        
        question: "4. Point out the wrong statement." , 
        a: "Simple linear regression is equipped to handle more than one predictor" ,
        b: "Compound linear regression is not equipped to handle more than one predictor" ,
        c: "Linear regression consists of finding the best-fitting straight line through the points" ,
        d: "All of the mentioned" ,
        ans: "ans1"
    },

    {
        question: "5. Which of the following technique comes under practical machine learning?" , 
        a: "Bagging" , 
        b: "Boosting" ,
        c: "Forecasting" ,
        d: "None of the mentioned" ,
        ans:"ans2"
    },

    {
        question: "6. Which of the following technique is also referred to as Bagging?" , 
        a: "Bootstrap aggregating " , 
        b: "Bootstrap subsetting" , 
        c: "Bootstrap predicting" , 
        d: "All of the mentioned" , 
        ans: "ans1"
    },

    {
        question: "9. Which of the following is characteristic of Raw Data?" , 
        a: "Data is ready for analysis" , 
        b: "Original version of data" , 
        c: "Easy to use for data analysis" , 
        d: "None of the mentioned" , 
        ans: "ans2"
    }
];

// till here put you questions 

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit")
const answers =document.querySelectorAll(".answer")

let questionCount = 0;
let score=0;
const loadquestion = () => {
    const questionList = quizDB[questionCount] ; 
    question.innerText = questionList.question ; 

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadquestion();

const checkAnswer = () => {
    let answer;
    answers.forEach((currentans) =>{
        if(currentans.checked){
            answer = currentans.id;
        }
    });
    return answer;
};
submit.addEventListener('click' ,  ()=>{
    const checkedanswer = checkAnswer();
    
    if(checkedanswer == quizDB[questionCount].ans){
        score++;
    }
    questionCount++;

    if(questionCount<quizDB.length){
        loadquestion();
    }

} )