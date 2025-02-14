document.addEventListener("DOMContentLoaded", function () {
    var typewriter = new Typewriter(document.getElementById('role'), {
        loop: true,
        autoStart: true
    });

    typewriter
        .typeString("COMPUTER SCIENCE GRADUATE STUDENT")
        .pauseFor(2000)
        .deleteAll()
        .typeString("COMPETITIVE PROGRAMMER")
        .pauseFor(2000)
        .deleteAll()
        .typeString("TECHNOLOGY ENTHUSIAST")
        .pauseFor(2000)
        .deleteAll()
        .start();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        let offset = 90; // Adjust this value based on navbar height
        let elementPosition = target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth"
        });
    });
});