export function setupBurgerMenu() {
    const menuToggle = document.createElement("button");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";
    document.querySelector("header").appendChild(menuToggle);
    
    const navMenu = document.querySelector("nav ul");
    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
}

