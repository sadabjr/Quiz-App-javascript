const questions =[{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'

},
{
    'que': 'Which built-in method removes the last element from an array and returns that element?',
    'a': 'last()',
    'b': 'get()',
    'c': 'run()',
    'd': 'pop()',
    'correct': 'd'

},
{
    'que': 'Which built-in method returns the string representation of the number"s value?',
    'a': 'toValue()',
    'b': 'toNumber()',
    'c': 'toString()',
    'd': 'None of above',
    'correct': 'c'

},
{
    'que': 'Which of the following function of Array object sorts the elements of an array?',
    'a': 'toSource()',
    'b': 'sort()',
    'c': 'toString()',
    'd': 'unshift()',
    'correct': 'b'

}]


let index =0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if(ans === data.correct) {
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3> thanks you for playing</h3>
    <h2> ${right} / ${total} are correct </h2>`
}


// initial call
loadQuestion();