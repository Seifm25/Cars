const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
let userInput=document.querySelector("[name='username']");
let emailInput=document.querySelector("[name='email']");
let passInput=document.querySelector("[name='pass']");
let emInput=document.querySelector("[name='em']");
let passwordInput=document.querySelector("[name='password']");



document.forms[0].onsubmit = function(event) {
    let userValid = false;
    let passValid = false;
    let emValid = false;


    if (userInput.value.trim() !== "") {
        userValid = true;
    }

    if (emailInput.value.trim() !== "") {
        emValid = true;
    }

    if (passInput.value.trim() !== "") {
        passValid = true;
    }
    


    if (userValid === false || passValid === false || emValid === false) {
        event.preventDefault(); 
        alert("Make sure to fill in all the required fields!");
    }
};



document.forms[1].onsubmit = function(event) {
    let emailValid = false;
    let passwordValid = false;

 
    if (emInput.value.trim() !== "") {
        emailValid = true;
    }

    if (passwordInput.value.trim() !== "") {
        passwordValid = true;
    }

    if (emailValid === false || passwordValid === false) {
        event.preventDefault();
        alert("Please fill in Email and Password for Sign In!");
    }
     else {
       
        window.location.href = "home.html";
        event.preventDefault(); 
    }
};
const userrInput=document.querySelector("[name='username']");
const emaiilInput=document.querySelector("[name='email']");
const passwInput=document.querySelector("[name='pass']");
 

userrInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        emaiilInput.focus(); 
    }
});


emaiilInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
       
        e.preventDefault();
        passwInput.focus();
    }
});
passwInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
       
        console.log("sending your data");
    }
});


const emaileInput = document.querySelector('input[name="em"]');
const passworrdInput = document.querySelector('input[name="password"]');
 

emaileInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        passworrdInput.focus(); 
    }
});


passworrdInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
       
        console.log("sending your data");
    }
});
function togglePassVisibility(inputId, iconElement) {
    const passInput = document.getElementById(inputId);
    
    if (passInput.type === "password") {
        passInput.type = "text";
        iconElement.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passInput.type = "password";
        iconElement.classList.replace("fa-eye-slash", "fa-eye");
    }
}