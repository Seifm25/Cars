let darkMode=localStorage.getItem('darkMode') 
const themeSwitch=document.getElementById('theme-switch')

const enabledarkMode=()=>{
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode','active')
}
const disabledarkMode=()=>{
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode',null)
}
if(darkMode=="active") enabledarkMode()
themeSwitch.addEventListener("click",()=>{
    darkMode=localStorage.getItem('darkMode')
    darkMode!="active"?enabledarkMode():disabledarkMode()
})