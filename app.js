let arrowTop = document.getElementById("upArrow");
document.getElementsByClassName("show");
document.getElementsByClassName("hide");

arrowTop.className = "hide";

// arrow appears as you scroll function

let scrolling = function () {

    let y = window.scrollY;
    if (y > 70) {
        arrowTop.className = "show";
    } else {
        arrowTop.className = "hide";
    }
};

window.addEventListener("scroll", scrolling);

// Back to top function

arrowTop.addEventListener("click", backToTop);

function backToTop() {
    window.scrollTo(0, 0);
}