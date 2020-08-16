function animatedForm(){
    const arrows=document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrow=>{
        arrow.addEventListener('click',()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nextForm=parent.nextElementSibling;
            

            // check for validation
            if(input.type ==="text" && validateUser(input)){
                nextSlide(parent,nextForm)
            }else if(input.type==="emial" && validateEmail(input)){
                nextSlide(parent,nextForm)
            }
        });
    });
}
function validateUser(user){
    if(user.value.length<6){
        console.log('not enough character')
        error('rgb(189,87,87)')
    }else{
        error('rgb(87,189.130)');
        return true;
    }
}
function validateEmail(){
    const validation=/^[^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(87,189.130)');
        return true;
    }else{
        error('rgb(189,87,87)');
    }
}
function nextSlide(parent,nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}
function error(color){
    document.body.style.backgroundColor=color;
}
animatedForm()