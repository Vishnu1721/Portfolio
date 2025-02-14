// document.addEventListener("DOMContentLoaded", function () {
//     const projectsContainer = document.querySelector('.projects-container');

//     const projects = [
//         { title: "Online Query System", description: "Web app for campus discussions using React & Node.js.", tech: ["React", "Node.js", "MySQL"] },
//         { title: "Natural Disaster Classification", description: "AI-powered disaster detection achieving 88% accuracy.", tech: ["TensorFlow", "Python", "OpenCV"] }
//     ];

//     projects.forEach(project => {
//         projectsContainer.innerHTML += `
//             <div class="project-card">
//                 <h2>${project.title}</h2>
//                 <p>${project.description}</p>
//                 <div class="techStack">
//                     ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
//                 </div>
//             </div>
//         `;
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const projectItems = document.querySelectorAll(".project-item");
    const projectDetails = document.querySelectorAll(".project-details");

    projectItems.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelector(".project-item.active").classList.remove("active");
            this.classList.add("active");

            projectDetails.forEach(detail => {
                detail.classList.remove("active");
            });

            document.getElementById(this.dataset.project).classList.add("active");
        });
    });
});

