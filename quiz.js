function check(){
    var score=0;
    const right_answer_1=document.getElementById('q1-a1');
    const q1_answer_2=document.getElementById('q2-a1');
    const q1_answer_3=document.getElementById('q3-a2');
    const q1_answer_4=document.getElementById('q1-a4');
    if(right_answer_1.checked==true){
        score++
        alert("Q1 Answer Right");
    }else{
        alert("Q1 Answer Wrong");
    }
    if(q1_answer_2.checked==true){
        score++
        alert("Q2 Answer Right");
    }else{
        alert("Q2 Answer Wrong");
    }
    if(q1_answer_3.checked==true){
        score++
        alert("Q3 Answer Right");
    }else{
        alert("Q3 Answer Wrong");
    }
    alert("your score is"+score)
}