function send() {
    var email = document.getElementById('form-input-email')
    var name = document.getElementById('form-input-name');
    var textBox = document.getElementById('text-area');
    var form = document.getElementById('form');
    var required = document.getElementById('required');


    /*   if(email&&name&&textbox == true){
           console.log("First Name:" + " " + name.value + "\n" +"Email:" + " " + email.value + "\n" + "Message" + " " + textBox.value);
       }else{
       alert("FILL OUT THE FORM")
   
       } */
        if (name.value == "") {
            required.textContent = "* Required Field";
            return false;
        }

        if (email.value == "") {
            required.textContent = "* Required Field";
            return false;
        }

}