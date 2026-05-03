let darkMode=localSٍtorage.getItem('lightMode') 
const themeSwitch=document.getElementById('theme-switch')

const enabledarkMode=()=>{
    document.body.classList.add('lightMode')
    localStorage.setItem('lightMode','active')
}
const disabledarkMode=()=>{
    document.body.classList.remove('lightMode')
    localStorage.setItem('lightMode',null)
}
if(darkMode=="active") enabledarkMode()
themeSwitch.addEventListener("click",()=>{
    darkMode=localStorage.getItem('lightMode')
    darkMode!="active"?enabledarkMode():disabledarkMode()
})