import { fetchJSON, renderProjects } from '../global.js';

console.log('../lib/projects.json');  // Check if this is the right path

const projects = await fetchJSON('../lib/projects.json');
const projectsContainer = document.querySelector('.projects');
renderProjects(projects, projectsContainer, 'h2');

const titleElement = document.querySelector('.projects-title');
titleElement.textContent = `${projects.length} Projects`;