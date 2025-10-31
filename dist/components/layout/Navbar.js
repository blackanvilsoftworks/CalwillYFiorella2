import { globalInfo } from '../../utils/constants.js';
import { arrContainers } from '../../utils/arrays.js';
export class Navbar {
    constructor(id, className) {
        this.container = this.createElement(id, className);
    }
    getContainer() {
        try {
            if (!this.container.innerHTML) {
                throw new Error(`Element id:${this.container.id} has no innerHTML set.`);
            }
            return this.container;
        }
        catch (error) {
            console.error(error);
            return document.createElement('nav');
        }
    }
    createElement(id, className) {
        const nav = document.createElement('nav');
        nav.id = id;
        nav.className = className;
        nav.innerHTML = this.createHTML();
        return nav;
    }
    createHTML() {
        var _a;
        return `
            <div class="container-fluid">
                <a class="navbar-brand" href="#${(_a = arrContainers[1]) === null || _a === void 0 ? void 0 : _a.id}">
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