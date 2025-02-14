// document.addEventListener("DOMContentLoaded", function () {
//     const experienceContent = document.querySelector('.exp-content');
//     const experienceItems = document.querySelectorAll('.exp-item');

    // Experience data
//     const experiences = {
//         intern_comcast: {
//             title: "Backend Intern",
//             company: "@Comcast",
//             date: "Jan 2023 - July 2023 | Internship",
//             description: [
//                 "Designed and implemented microservices architectures, improving system modularity and scalability for enterprise application",
//                 "Collaborated with cross-functional teams to enhance operational efficiency, delivering user-centric web applications with improved performance by 40%.",
//                 "Managed and optimized SQL databases for web-based applications, ensuring smooth data flow and storage."
//             ],
//             techStack: [
//                 { name: "Java", color: "red" },
//                 { name: "Spring Boot", color: "green" },
//                 { name: "REST API", color: "black" },
//                 { name: "MySQL", color: "purple" },
//                 { name: "Git", color: "blue" }
//             ]
//         },

//         full_comcast: {
//             title: "Software Developer",
//             company: "@Comcast",
//             date: "Aug 2023 - July 2024 | Full Time",
//             description: [
//                 " Designed and developed secure, user-friendly dashboards and frontend web applications,optimizing UI responsiveness.",
//                 "Designed and developed microservices-based applications, improving system scalability and modularity.",
//                 "Implemented backend services using Spring Boot and Java, enhancing database query performance by 30%."
//             ],
//             techStack: [
//                 { name: "Java", color: "red" },
//                 { name: "Spring Boot", color: "green" },
//                 { name: "AngularTS", color: "red" },
//                 { name: "REST API", color: "black" },
//                 { name: "MySQL", color: "violet" },
//                 { name: "HTML5", color: "blue" },
//                 { name: "CSS", color: "purple" },
//                 { name: "Git", color: "blue" }
//             ]
//         },
        

//     };

//     // Function to display experience details
//     function displayExperience(role) {
//         const exp = experiences[role];
//         experienceContent.innerHTML = `
//             <div class="exp-details">
//                 <h2>${exp.title} <span class="company">${exp.company}</span></h2>
//                 <p class="date">${exp.date}</p>
//                 <ul class="content">
//                     ${exp.description.map(desc => `<li>${desc}</li>`).join('')}
//                 </ul>
//                 <div class="techStack">
//                     ${exp.techStack.map(stack => `
//                         <span class="tech-badge" style="background-color:${stack.color}">${stack.name}</span>
//                     `).join('')}
//                 </div>
//             </div>
//         `;
//     }

//     // Add event listeners to sidebar items
//     experienceItems.forEach(item => {
//         item.addEventListener("click", function () {
//             document.querySelector(".active").classList.remove("active");
//             this.classList.add("active");
//             displayExperience(this.dataset.role);
//         });
//     });

//     // Load default experience
//     displayExperience("intern_comcast");
// });

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");

    function isElementInViewport(el) {
        let rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function checkVisibility() {
        items.forEach(item => {
            if (isElementInViewport(item)) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});

