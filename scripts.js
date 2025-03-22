document.addEventListener("DOMContentLoaded", function () {
    console.log("John's portfolio loaded!");

    document.querySelectorAll("nav a").forEach(link => {
        link.onclick = function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        };
    });
});