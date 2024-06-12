var patterns = {
    telephone: /^[\d]{11}$/,
    username: /^[a-z\d]{5,12}$/,
    password: /^[\w]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

const inputs = document.querySelectorAll('input');

function validate(field, regex){
    if(regex.test(field.value)){
        field.className = 'valid';
    }else{
        field.className = 'invalid';
    }
}

let canSubmit = false;

var submit_button = document.querySelector("button");

inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
        validate(e.target, patterns[e.target.name]);

        checkForButton(inputs); 
    })
})

function checkForButton(inputs){
    inputs.forEach((input)=>{
        if(input.classList.contains("invalid") || input.classList.length == 0){
            canSubmit = false;
            submit_button.classList.remove("active_but");
            submit_button.classList.add("inactive_but");
            return;
        }else{
            canSubmit = true;
            submit_button.classList.remove("inactive_but");
            submit_button.classList.add("active_but");
        }
    })  
}