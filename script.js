var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var textArea = document.getElementById('text-area').value;
var button = document.getElementById('button').value;



function send(){
    if(name&&email&&textArea == ""){
        alert("EMPTY TEXT AREA");
        return false;
    }else{
        alert("CONTINUE")
    }
    
}