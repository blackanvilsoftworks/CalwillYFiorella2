import { createTitle } from '../../utils/createTitle.js';
import { arrPayMethods } from '../../utils/arrays.js';
import { Container } from '../Container.js';
export class PayMethod extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const html = `
            <h2 class="mb-4">
                ${createTitle(title, icon).outerHTML}
            </h2>
            <p>Aceptamos los siguientes métodos de pago:</p>
            ${this.createPayMethodsList().outerHTML}`;
        this.setHTML(html);
    }
    createPayMethodsList() {
        const ul = document.createElement('ul');
        ul.className = 'list-unstyled';
        ul.innerHTML = arrPayMethods.map(method => `
            <li>
                - ${method}
            </li>`).join('');
        return ul;
    }
}
//# sourceMappingURL=PayMethod.js.map