import { globalInfo } from '../../utils/constants.js';
import { arrContainers } from '../../utils/arrays.js';
export class Navbar {
    constructor() {
        this.element = this.createNavbar();
        // this.setupEventListeners();
    }
    getElement() {
        return this.element;
    }
    createNavbar() {
        const nav = document.createElement('nav');
        nav.className = 'navbar navbar-expand-md navbar-light m-0 p-0 fixed-top shadow';
        nav.id = 'navbar_container';
        nav.innerHTML = `
            <div class="container-fluid">
                <a class="navbar-brand" href="#${nav.id}">
                    <img src="./assets/navbar-logo.png" alt="${globalInfo.name} Logo" height="40" class="d-inline-block align-text-top me-2">
                    <span class="ms-2 navbar-title">${globalInfo.name.toUpperCase()}</span>
                </a>
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center ps-auto" id="navbarNav">
                    ${this.createNavbarItems().outerHTML}
                </div>
            </div>`;
        return nav;
    }
    createNavbarItems() {
        const ul = document.createElement('ul');
        ul.className = 'navbar-nav ms-auto';
        ul.innerHTML = arrContainers.map((item) => {
            if (item.navbar) {
                return `
                    <li class="nav-item">
                        <a class="nav-link" href="#${item.id}">${item.navbar}</a>
                    </li>`;
            }
        }).join('');
        return ul;
    }
}
//# sourceMappingURL=Navbar.js.map