import { loadCV } from './cv.js';
import { loadProjects } from './projects.js';
import { setupBurgerMenu } from './menu.js';

document.addEventListener("DOMContentLoaded", function() {
    loadCV();
    loadProjects();
    setupBurgerMenu();
});
