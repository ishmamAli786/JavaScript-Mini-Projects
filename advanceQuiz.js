window.onload = function () {
    this.show(0)
}
let questions = [{
    id: 1,
    question: 'what is the full form of RAM ?',
    answer: 'Random Access Memory',
    options: [
        "Random Access Memory",
        "Randomly Access Memory",
        "Run Accept Memory",
        "None Of These"
    ]
},
{
    id: 2,
    question: "What is the Full Form of CPU  ?",
    answer: "Central Processing Unit",
    options: [
        "Central Program Unit",
        "Central Processing Unit",
        "Central Preload Unit",
        "None Of These"
    ]
}, {
    id: 3,
    question: "What is the Full Form of E-mail ?",
    answer: "Electronic Mail",
    options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None Of These"
    ]
}
];
function submitForm(e) {
    e.preventDefault();
    let name = document.forms['welcome_form']['name'].value;

    //store player name in session
    sessionStorage.setItem("name", name);
    location.href = "advanceQuiz2.html";
    console.log(name)
}
let question_count = 0;
let point = 0;
function nextss() {
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check answer by the user
    if (user_answer == questions[question_count].answer) {
        point += 10;
        sessionStorage.setItem("points",point);
    }
    if(question_count==questions.length-1){
        sessionStorage.setItem("time",`${minutes} minutes and ${seconds} seconds`);
        clearInterval(myTime);
        location.href="end.html";
        return;
    }
    question_count++;
    show(question_count)
}
function show(count) {
    let question = document.getElementById('question');
    // question.innerHTML="<h2>"+questions[count].question+"</h2>";
    question.innerHTML = `<h2>Q${question_count+1}.${questions[count].question}</h2>
   <ul class="option_group">
   <li class="option active">${questions[count].options[0]}</li>
   <li class="option">${questions[count].options[1]}</li>
   <li class="option">${questions[count].options[2]}</li>
   <li class="option">${questions[count].options[3]}</li>
</ul>`;
    toggleActive();
}
function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains('active')) {
                    option[j].classList.remove('active');
                }
            }
            option[i].classList.add('active');
        }
    }
}