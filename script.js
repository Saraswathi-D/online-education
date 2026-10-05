const courseModal = document.getElementById("courseModal");
const closeModal = document.getElementById("closeModal");

const courseDetails = document.getElementById("courseDetails");
const enrollmentForm = document.getElementById("enrollmentForm");
const successMessage = document.getElementById("successMessage");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");

const showEnrollForm = document.getElementById("showEnrollForm");

const courseDescriptions = {

    "Complete Web Development Bootcamp":
        "Learn HTML, CSS, JavaScript, responsive design and modern web development by building practical projects.",

    "Java Programming Masterclass":
        "Master Java fundamentals, OOP, inheritance, interfaces, exception handling and important programming concepts.",

    "React JS Frontend Development":
        "Build modern responsive web applications using React, components, props, state and reusable UI patterns.",

    "Full Stack Java Development":
        "Learn frontend technologies, Java backend development, databases, REST APIs and full-stack application development.",

    "Python Programming":
        "Learn Python from beginner to advanced level including functions, OOP, modules, file handling and projects.",

    "UI UX Design Masterclass":
        "Learn user research, wireframing, prototyping, design systems and modern UI/UX principles.",

    "Figma UI Design Complete Course":
        "Create professional UI designs, prototypes, components and design systems using Figma.",

    "Graphic Design Essentials":
        "Learn typography, layouts, branding, color theory and visual communication for professional graphic design.",

    "Business Management Essentials":
        "Understand business strategy, leadership, team management, decision making and business operations.",

    "Entrepreneurship Startup Guide":
        "Learn how to develop startup ideas, create business plans, understand customers and launch a business.",

    "Project Management Professional":
        "Learn project planning, task management, teamwork, execution, risk management and successful project delivery.",

    "Digital Marketing Strategy":
        "Master SEO, social media, content marketing, paid advertising and digital analytics.",

    "Social Media Marketing":
        "Learn how to create social media campaigns, grow audiences and build strong online brands.",

    "Content Marketing Mastery":
        "Learn content planning, storytelling, content creation and strategies for building digital audiences.",

    "Python & Data Science":
        "Learn Python, data analysis, visualization, statistics and practical data science workflows.",

    "Artificial Intelligence Fundamentals":
        "Understand artificial intelligence, machine learning concepts, intelligent systems and real-world AI applications.",

    "Machine Learning with Python":
        "Build machine learning models using Python, datasets, algorithms, model evaluation and practical projects.",

    "Professional Photography":
        "Learn camera settings, composition, lighting and professional photography techniques.",

    "Mobile Photography Masterclass":
        "Learn how to capture creative and professional-quality photographs using your smartphone.",

    "Photo Editing & Lightroom":
        "Master photo editing, color correction, image enhancement and professional Lightroom workflows."
};


/* COURSE DETAILS */

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const courseName = button.dataset.course;

        modalTitle.textContent = courseName;

        modalDescription.textContent =
            courseDescriptions[courseName] ||
            "Learn practical skills through expert-led lessons and hands-on projects.";

        courseDetails.style.display = "block";
        enrollmentForm.style.display = "none";
        successMessage.style.display = "none";

        courseModal.classList.add("show");

        document.body.style.overflow = "hidden";
    });
});


/* CLOSE MODAL */

function closeCourseModal() {

    courseModal.classList.remove("show");

    document.body.style.overflow = "";

    enrollmentForm.reset();

    courseDetails.style.display = "block";
    enrollmentForm.style.display = "none";
    successMessage.style.display = "none";
}

closeModal.addEventListener("click", closeCourseModal);


/* CLOSE WHEN CLICK OUTSIDE */

courseModal.addEventListener("click", event => {

    if (event.target === courseModal) {
        closeCourseModal();
    }

});


/* SHOW ENROLLMENT FORM */

showEnrollForm.addEventListener("click", () => {

    courseDetails.style.display = "none";

    enrollmentForm.style.display = "block";

    successMessage.style.display = "none";

});


/* ENROLLMENT */

enrollmentForm.addEventListener("submit", event => {

    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();

    if (name.length < 3) {

        alert("Please enter your full name.");

        return;
    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Please enter a valid email address.");

        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;
    }


    enrollmentForm.style.display = "none";

    successMessage.style.display = "block";

});


/* SUCCESS CLOSE */

document.getElementById("successClose").addEventListener("click", () => {

    closeCourseModal();

});


/* SEARCH */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const courseCards = document.querySelectorAll(".course-card");
const noResults = document.getElementById("noResults");

function searchCourses() {

    const searchValue =
        searchInput.value.trim().toLowerCase();

    let found = 0;

    courseCards.forEach(card => {

        const title =
            card.dataset.title.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        if (
            title.includes(searchValue) ||
            category.includes(searchValue)
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";
        }

    });

    noResults.style.display =
        found === 0 ? "block" : "none";

    document.getElementById("courses")
        .scrollIntoView({
            behavior: "smooth"
        });
}

searchBtn.addEventListener("click", searchCourses);

searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        searchCourses();
    }

});


/* CATEGORY FILTER */

document.querySelectorAll(".category-card").forEach(category => {

    category.addEventListener("click", () => {

        const selectedCategory =
            category.dataset.category.toLowerCase();

        document.querySelectorAll(".category-card")
            .forEach(item => {
                item.classList.remove("active");
            });

        category.classList.add("active");

        let found = 0;

        courseCards.forEach(card => {

            const courseCategory =
                card.dataset.category.toLowerCase();

            if (courseCategory === selectedCategory) {

                card.style.display = "";

                found++;

            } else {

                card.style.display = "none";
            }

        });

        noResults.style.display =
            found === 0 ? "block" : "none";

        document.getElementById("courses")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* VIEW ALL */

document.getElementById("viewAllBtn")
    .addEventListener("click", () => {

        searchInput.value = "";

        courseCards.forEach(card => {
            card.style.display = "";
        });

        noResults.style.display = "none";

        document.querySelectorAll(".category-card")
            .forEach(card => {
                card.classList.remove("active");
            });

        document.querySelector(".category-card")
            .classList.add("active");

        document.getElementById("courses")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* EXPLORE BUTTON */

document.getElementById("exploreBtn")
    .addEventListener("click", () => {

        document.getElementById("courses")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* CTA BUTTON */

document.getElementById("ctaBtn")
    .addEventListener("click", () => {

        document.getElementById("courses")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* LOGIN */

document.getElementById("loginBtn")
    .addEventListener("click", () => {

        alert("Login feature will be available soon.");

    });


/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* CLOSE MOBILE MENU AFTER CLICK */

document.querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

        });

    });


/* RESET MOBILE MENU ON RESIZE */

window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {
        navLinks.classList.remove("show");
    }

});