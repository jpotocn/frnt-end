const name = document.getElementById('form-input-name');
const email = document.getElementById('form-input-email');
const textBox = document.getElementById('form-text-area');
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('text-required');
 
// Defining a function to display error message

function errorMessage(elementId , message){
    document.getElementById(elementId).innerHTML = message;
}

form.addEventListener('submit', (e) => {
    
    //name validation
    if(name.value === ''){
        errorMessage("name-required","Required field")
        errorMessage("star-name-required","*")
        e.preventDefault()
    }else{
        console.log("Name:" + name.value);
    }

    //email validation
    if(email.value === ''){
        errorMessage("email-required","Required field")
        errorMessage("star-email-required","*")      
        e.preventDefault()
    }else{
        console.log("Email:" + email.value);
    }

    //textbox validation
    if(textBox.value === ''){
        errorMessage("text-required","Required field")
        errorMessage("star-text-required","*")
        e.preventDefault()
    }
    else{
        console.log("Message:" + textBox.value);
    }
})



