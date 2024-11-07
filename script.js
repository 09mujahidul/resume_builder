// script.js
function generateResume() {
    // Get form values
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const projects=document.getElementById("projects").value;
    const hobbies=document.getElementById("hobbies").value;
    const activities=document.getElementById("activities").value;
    
    // Generate resume HTML
    const resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Contact:</strong> ${contact}</p>
        <h3>Contact</h3>
        <p>${contact}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Projects</h3>
        <p>${projects}</p>
        <h3>Hobbies</h3>
        <p>${hobbies}</p>
        <h3>Activities</h3>
        <p>${activities}</p>
    `;
    
    // Display the generated resume
    document.getElementById("resume-output").innerHTML = resumeHTML;
}
