export function loadProjects() {
    const projectList = document.getElementById("project-list");
    const loadingText = document.getElementById("loading");

    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            projects.filter(project => ["trafikljuset", "panda"].includes(project.title.toLowerCase())).forEach(project => {
                let projectItem = document.createElement("div");
                projectItem.classList.add("project-item");
                projectItem.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error("Error loading local projects:", error);
        });

    const githubUsername = "Saif-SS";
    const allowedProjects = ["landing-page", "demo"];

    fetch(`https://api.github.com/users/${githubUsername}/repos`)
        .then(response => response.json())
        .then(repos => {
            loadingText.style.display = "none"; // Ta bort loading-texten när GitHub-projekten laddats
            repos.filter(repo => allowedProjects.includes(repo.name.toLowerCase())).forEach(repo => {
                let projectItem = document.createElement("div");
                projectItem.classList.add("project-item");
                projectItem.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;
                projectList.appendChild(projectItem);
            });
        })
        .catch(error => {
            console.error("Error loading GitHub projects:", error);
            loadingText.innerText = "Failed to load GitHub projects.";
        });
}