import { globalInfo }       from '../../utils/constants.js';
import { arrContainers }    from '../../utils/arrays.js';
import { ArrContainer }     from '../../interfaces/ArrContainer.js';
import { Container }        from '../Container.js';

export class Navbar extends Container {
    constructor (id: string, className: string) {
        super(id, className);
        this.createHTML(id);
    }
    
    private createHTML (id:string): void {
        const html = `
            <div class="container-fluid">
                <a class="navbar-brand" href="#${id}">
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
        this.setHTML(html);
    }

    private createNavbarItems (): HTMLUListElement {
        const ul        = document.createElement('ul');
        ul.className    = 'navbar-nav ms-auto';
        ul.innerHTML    = arrContainers.map((item: ArrContainer) => {
            if (item.navbar){
                return `
                    <li class="nav-item">
                        <a class="nav-link" href="#${item.id}">${item.navbar}</a>
                    </li>`;
            }
        }).join('');
        return ul;
    }
}