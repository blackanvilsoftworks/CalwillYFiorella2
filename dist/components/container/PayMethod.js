import { Container } from '../Container.js';
import { HeadingElement } from '../elements/Heading.js';
import { ParagraphElement } from '../elements/Paragraph.js';
import { createTitle } from '../../utils/createTitle.js';
import { arrPayMethods } from '../../utils/arrays.js';
export class PayMethod extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const h2 = new HeadingElement({
            className: 'mb-4',
            type: 'h2'
        });
        h2.addFirstChild([createTitle(title, icon)]);
        const p = new ParagraphElement({
            text: 'Aceptamos los siguientes métodos de pago:'
        });
        const html = `
            ${h2.getHeading().outerHTML}
            ${p.getParagraph().outerHTML}
            ${this.createPayMethodsList().outerHTML}`;
        this.setHTML(html);
    }
    createPayMethodsList() {
        const ul = document.createElement('ul');
        ul.className = 'list-unstyled';
        ul.innerHTML = arrPayMethods.map(method => {
            const li = document.createElement('li');
            li.textContent = `- ${method}`;
            return li.outerHTML;
        }).join('');
        return ul;
    }
}
//# sourceMappingURL=PayMethod.js.map