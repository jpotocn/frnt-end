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
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name.value) === false) {
            errorMessage("name-required", "Please, enter a valid name.");
            errorMessage("star-name-required","*");
        } 
        alert("Name:" + name.value);
    }

    //email validation
    if(email.value === ''){
        errorMessage("email-required","Required field")
        errorMessage("star-email-required","*")      
        e.preventDefault()
    }else{
        var regex = /^\S+@\S+\.\S+$/;                
        if(regex.test(email.value) === false) {
            errorMessage("email-required", "Please, enter a valid email.");
            errorMessage("star-email-required","*");
        } 
        alert("Name:" + email.value);
    }

    //textbox validation
    if(textBox.value === ''){
        errorMessage("text-required","Required field")
        errorMessage("star-text-required","*")
        e.preventDefault()
    }
    else{
        alert("Message:" + textBox.value);
    }
})



