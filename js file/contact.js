let nameinput=document.querySelector("[name='name']");
let emminput=document.querySelector("[name='emaill']");
let telinput=document.querySelector("[name='tel']");
document.forms[0].onsubmit = function(event){
    let nameValid = false;
    let emailValid = false;
    let telValid=false;
    if (nameinput.value.trim() !== "") {
        nameValid = true;
    }

    if (emminput.value.trim() !== "") {
        emailValid = true; 
    }

    if (telinput.value.trim() !== "") {
        telValid = true;
    }
  
    if (nameValid === false || emailValid === false || telValid === false) {
        event.preventDefault(); 
        alert("Make sure to fill in all the required fields!");
    }
};
