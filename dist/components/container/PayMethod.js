import { Container } from '../Container.js';
import { HeadingElement } from '../elements/Heading.js';
import { ParagraphElement } from '../elements/Paragraph.js';
import { createTitle } from '../../utils/createTitle.js';
import { arrPayMethods } from '../../utils/arrays.js';
import { UnorderedListElement } from '../elements/UnorderedList.js';
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
        const ul = new UnorderedListElement({
            className: 'list-unstyled'
        });
        arrPayMethods.forEach(method => {
            const li = document.createElement('li');
            li.textContent = `- ${method}`;
            ul.addLastChild([li]);
        });
        return ul.getUnorderedList();
    }
}
//# sourceMappingURL=PayMethod.js.map