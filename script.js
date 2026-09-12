document.addEventListener("DOMContentLoaded", () => {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    const revealElements = document.querySelectorAll(
        ".section, .project-section, .showcase-card"
    );


    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });


    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    revealElements.forEach((element) => {
        observer.observe(element);
    });


    const videos = document.querySelectorAll("video");


    videos.forEach((video) => {

        video.addEventListener("play", () => {

            videos.forEach((otherVideo) => {

                if (otherVideo !== video) {
                    otherVideo.pause();
                }

            });

        });

    });

});
