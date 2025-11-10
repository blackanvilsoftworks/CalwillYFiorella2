import { globalInfo } from '../../utils/constants.js';
import { arrContainers } from '../../utils/arrays.js';
import { ButtonElement } from '../elements/Button.js';
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
        const div1 = document.createElement('div');
        div1.className = 'container-fluid';
        const a = document.createElement('a');
        a.className = 'navbar-brand';
        a.href = `#${(_a = arrContainers[1]) === null || _a === void 0 ? void 0 : _a.id}`;
        const img = document.createElement('img');
        img.src = './assets/navbar-logo.png';
        img.alt = `${globalInfo.name} Logo`;
        img.height = 40;
        img.className = 'd-inline-block align-text-top me-2';
        const span = document.createElement('span');
        span.className = 'ms-2 navbar-title';
        span.textContent = globalInfo.name.toUpperCase();
        a.appendChild(img);
        a.appendChild(span);
        div1.appendChild(a);
        const button = new ButtonElement({
            className: 'navbar-toggler border-0',
            type: 'button',
            dataBsAttributes: [{
                    toggle: 'collapse',
                    target: '#navbarNav',
                }],
            aria_controls: 'navbarNav',
            aria_expanded: 'false',
            aria_label: 'Toggle navigation'
        });
        const spanIcon = document.createElement('span');
        spanIcon.className = 'navbar-toggler-icon';
        button.addFirstChild(spanIcon);
        div1.appendChild(button.getButton());
        const div2 = document.createElement('div');
        div2.className = 'collapse navbar-collapse text-center ps-auto';
        div2.id = 'navbarNav';
        div2.appendChild(this.createNavbarItems());
        div1.appendChild(div2);
        return div1.outerHTML;
    }
    createNavbarItems() {
        const ul = document.createElement('ul');
        ul.className = 'navbar-nav ms-auto';
        ul.innerHTML = arrContainers.map((item) => {
            if (item.navbar) {
                const li = document.createElement('li');
                li.className = 'nav-item';
                const a = document.createElement('a');
                a.className = 'nav-link';
                a.href = `#${item.id}`;
                a.textContent = item.navbar;
                li.appendChild(a);
                return li.outerHTML;
            }
        }).join('');
        return ul;
    }
}
//# sourceMappingURL=Navbar.js.map