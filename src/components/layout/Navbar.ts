import { globalInfo }       from '../../utils/constants.js';
import { arrContainers }    from '../../utils/arrays.js';
import { ArrContainer }     from '../../interfaces/ArrContainer.js';

export class Navbar {
    private container: HTMLElement;

    constructor (id: string, className: string) {
        this.container = this.createElement(id, className);
    }

    public getContainer (): HTMLElement {
        try {
            if (!this.container.innerHTML) {
                throw new Error(`Element id:${this.container.id} has no innerHTML set.`);
            }
            return this.container;
        } catch (error) {
            console.error(error);
            return document.createElement('nav');
        }        
    }

    private createElement (id:string, className:string): HTMLElement {
        const nav       = document.createElement('nav');
        nav.id          = id;
        nav.className   = className;
        nav.innerHTML   = this.createHTML();
        return nav;
    }
    
    private createHTML (): string {
        return `
            <div class="container-fluid">
                <a class="navbar-brand" href="#${arrContainers[1]?.id}">
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

    private createNavbarItems (): HTMLUListElement {
        const ul        = document.createElement('ul');
        ul.className    = 'navbar-nav ms-auto';
        ul.innerHTML    = arrContainers.map((item: ArrContainer) => {
            if (item.navbar){
                const li        = document.createElement('li');
                li.className    = 'nav-item';

                const a        = document.createElement('a');
                a.className    = 'nav-link';
                a.href         = `#${item.id}`;
                a.textContent  = item.navbar;

                li.appendChild(a);
                return li.outerHTML;
            }
        }).join('');
        return ul;
    }
}