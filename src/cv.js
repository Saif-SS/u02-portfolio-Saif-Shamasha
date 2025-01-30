export function loadCV() {
    fetch("cv.json")
        .then(response => response.json())
        .then(data => {
            let cvContent = "";
            data.education.forEach(edu => {
                cvContent += `<div class="cv-item" data-title="${edu.degree}" data-description="${edu.school} (${edu.year})">
                                  <h3>${edu.degree}</h3>
                                  <p>${edu.school} (${edu.year})</p>
                              </div>`;
            });
            data.work.forEach(work => {
                cvContent += `<div class="cv-item" data-title="${work.position}" data-description="${work.company} (${work.year})">
                                  <h3>${work.position}</h3>
                                  <p>${work.company} (${work.year})</p>
                              </div>`;
            });
            document.getElementById("cv-content").innerHTML = cvContent;

            document.querySelectorAll(".cv-item").forEach(item => {
                item.addEventListener("click", function() {
                    document.getElementById("modal-title").innerText = this.dataset.title;
                    document.getElementById("modal-description").innerText = this.dataset.description;
                    document.getElementById("cv-modal").style.display = "flex";
                });
            });

            document.querySelector(".close-button").addEventListener("click", function() {
                document.getElementById("cv-modal").style.display = "none";
            });
        })
        .catch(error => console.error("Error loading CV:", error));
}