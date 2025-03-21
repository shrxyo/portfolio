// Skills

const focusAreas = [
    "Frontend Development",
    "Machine Learning",
    "Natural Language Processing",
    "Large Language Models",
    "Game Development"
];

let currentFocusIndex = 0;
const focusTextElement = document.getElementById("focus-area");

function changeFocusText() {
    focusTextElement.textContent = focusAreas[currentFocusIndex];
    currentFocusIndex = (currentFocusIndex + 1) % focusAreas.length; 
}

setInterval(changeFocusText, 1500);

// Experience

const experiences = [
    {
        company: "Metropolis Healthcare",
        role: "Data Science Intern",
        location: "Mumbai, India",
        duration: "Feb 2023 - May 2023",
        description: [
            "Optimized data management by cleaning and organizing datasets (consisting of 4 months of marketing data) exceeding 2 million rows using SQL.",
            "CAnalyzed monthly revenue data using Tableau, identifying revenue optimization opportunities.",
            "Ideated an AI chatbot with R&D team for the mobile application, resulting in 20% increase in customer satisfaction based on feedback."
        ]
    },
    {
        company: "National University of Singapore",
        role: "Deep Learning Academic Intern",
        location: "Singapore",
        duration: "June 2023 - July 2023",
        description: [
            "Implemented YOLOv8 object detection model for industrial safety gear detection, achieving approximately 80% detection accuracy.",
            "Predicted an estimated 20% reduction in safety-related incidents, bolstering workplace safety protocols."
        ]
    },
    {
        company: "Stockone Technologies - a Shipsy Company",
        role: "Data Analyst Intern",
        location: "Bangalore, India",
        duration: "May 2023 – June 2023",
        description: [
            "Analyzed warehouse databases containing over 5 million rows using PostgreSQL and visualized insights on the Stockone dashboard, optimizing SKU inventory tracking.",
            "Designed a Stockone 2.0 prototype with Django Sentry, enhancing user experience and significantly reducing error instances."
        ]
    }
];

let currentIndex = 0;

function updateExperience() {
    const exp = experiences[currentIndex];
    document.getElementById("company-name").textContent = exp.company;
    document.getElementById("role").textContent = exp.role;
    document.getElementById("location").textContent = exp.location;
    document.getElementById("duration").textContent = exp.duration;

    const descriptionList = document.getElementById("description");
    descriptionList.innerHTML = "";
    exp.description.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        descriptionList.appendChild(li);
    });
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + experiences.length) % experiences.length;
    updateExperience();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % experiences.length;
    updateExperience();
});

updateExperience();
