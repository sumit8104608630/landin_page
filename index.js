let btn = document.querySelector(".nav-3");
let btn2 = document.querySelector(".close");

// Add "none" class to show the button
btn.addEventListener("click", function () {
    btn.classList.add("display");
});

// Remove "none" class to hide the button
btn2.addEventListener("click", function () {
    btn.classList.remove("display");
    btn2.classList.add("none")
});
