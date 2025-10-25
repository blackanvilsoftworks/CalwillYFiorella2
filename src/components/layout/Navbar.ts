import { globalInfo }       from '../../utils/constants.js';
import { arrContainers }    from '../../utils/arrays.js';
import { ArrContainer }     from '../../interfaces/ArrContainer.js';

export class Navbar {
    private element: HTMLElement;
  
    constructor (id: string = 'navbar_container') {
        this.element = this.createNavbar(id);
        // this.setupEventListeners();
    }
    
    public getElement (): HTMLElement {
        return this.element ;
    }

    private createNavbar (id:string): HTMLElement {
        const nav       = document.createElement('nav');
        nav.className   = 'navbar navbar-expand-md navbar-light m-0 p-0 fixed-top shadow';
        nav.id          = id;
        nav.innerHTML   = `
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

    private createNavbarItems (): HTMLElement {
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

    // private setupEventListeners(): void {
    //   // Manejar clicks en links
    //   this.element.addEventListener('click', (e) => {
    //     const target = e.target as HTMLElement;
    //     if (target.classList.contains('nav-link')) {
    //       e.preventDefault();
    //       this.handleNavClick(target.getAttribute('href')!);
    //     }
    //   });
  
    //   // Toggle móvil
    //   const toggle = this.element.querySelector('.navbar-toggle') as HTMLButtonElement;
    //   toggle.addEventListener('click', () => {
    //     this.toggleMobileMenu();
    //   });
    // }
  
    // private handleNavClick(section: string): void {
    //   console.log('Navegando a:', section);
    //   // Aquí manejas la navegación
    //   // Puedes emitir un evento personalizado
    //   window.dispatchEvent(new CustomEvent('navigation-change', {
    //     detail: { section }
    //   }));
    // }
  
    // private toggleMobileMenu(): void {
    //   this.element.classList.toggle('navbar--open');
    // }
  
    // public updateActiveLink(activeSection: string): void {
    //   // Actualizar link activo
    //   this.element.querySelectorAll('.nav-link').forEach(link => {
    //     link.classList.toggle('active', link.getAttribute('href') === activeSection);
    //   });
    // }
}