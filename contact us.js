const video = document.getElementById("carVideo");
const intro = document.querySelector(".intro");
const contact = document.getElementById("contact");

/* لما الفيديو يخلص فعليًا */
video.addEventListener("timeupdate", () => {
    if (video.currentTime >= 0.5) { 
        intro.classList.add("blur");
        
        // تقليل الـ Timeout لظهور أسرع للفورم
        setTimeout(() => {
            contact.classList.add("show");
        }, 500); // 100ms فقط ليظهر فوراً مع الـ blur
    }
});