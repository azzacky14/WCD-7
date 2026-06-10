const enterBtn = document.getElementById("enterBtn");
const loadingBar = document.getElementById("loadingBar");

enterBtn.addEventListener("click", () => {

    loadingBar.classList.add("active");

    setTimeout(() => {

        window.location.href =
        "pages/dashboard.html";

    }, 1000);

});