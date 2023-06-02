const quizData = [
    {
        question: 'which of the following is a markup language?',
        a: 'HTML',
        b: 'CSS',
        c: 'JavaScript',
        d: 'PhP',
        correct: 'a'
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }

]

let index = 0;
let total = quizData.length;
let correct = 0, incorrect = 0;
const quesBox = document.getElementById("quesBox")
const optionInput = document.querySelectorAll('.option')
const loadQuestoin = () => {
    if(index === total){
        return endQuiz();
    }
    reset();

    const data = quizData[index]
    quesBox.innerText = `${index+1}) ${data.question}`
    optionInput[0].nextElementSibling.innerText = data.a
    optionInput[1].nextElementSibling.innerText = data.b
    optionInput[2].nextElementSibling.innerText = data.c
    optionInput[3].nextElementSibling.innerText = data.d
}
document.getElementById("submit").addEventListener("click",submitQuiz)
function submitQuiz () {
    const ans = getAnswer()
    const data = quizData[index]
    if(ans==data.correct){
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestoin();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${correct} out of ${total} are correct </h2>
    </div>
    `
}

loadQuestoin()