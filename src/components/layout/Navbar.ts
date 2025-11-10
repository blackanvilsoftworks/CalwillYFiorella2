import { globalInfo }       from '../../utils/constants.js';
import { arrContainers }    from '../../utils/arrays.js';
import { ArrContainer }     from '../../interfaces/ArrContainer.js';
import { ButtonElement } from '../elements/Button.js';

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
        const div1      = document.createElement('div');
        div1.className  = 'container-fluid';

        const a     = document.createElement('a');
        a.className = 'navbar-brand';
        a.href      = `#${arrContainers[1]?.id}`;

        const img       = document.createElement('img');
        img.src         = './assets/navbar-logo.png';
        img.alt         = `${globalInfo.name} Logo`;
        img.height      = 40;
        img.className   = 'd-inline-block align-text-top me-2';

        const span       = document.createElement('span');
        span.className   = 'ms-2 navbar-title';
        span.textContent = globalInfo.name.toUpperCase();

        a.appendChild(img);
        a.appendChild(span);
        div1.appendChild(a);

        const button = new ButtonElement({
            className       : 'navbar-toggler border-0',
            type            : 'button',
            dataBsAttributes: [{
                toggle  : 'collapse',
                target  : '#navbarNav',
            }],            
            aria_controls   : 'navbarNav',
            aria_expanded   : 'false',
            aria_label      : 'Toggle navigation'
        });

        const spanIcon      = document.createElement('span');
        spanIcon.className  = 'navbar-toggler-icon';

        button.addFirstChild(spanIcon);
        div1.appendChild(button.getButton());

        const div2      = document.createElement('div');
        div2.className  = 'collapse navbar-collapse text-center ps-auto';
        div2.id         = 'navbarNav';
        div2.appendChild(this.createNavbarItems());
        div1.appendChild(div2);

        return div1.outerHTML;
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