const video = document.getElementById("carVideo");
const intro = document.querySelector(".intro");
const contact = document.getElementById("contact");

/* لما الفيديو يخلص فعليًا */
video.addEventListener("ended", () => {

    // 1 - blur على الفيديو
    intro.classList.add("blur");

    // 2 - بعد لحظة نظهر الكونتاكت
    setTimeout(() => {
        contact.classList.add("show");
    }, 600);

});