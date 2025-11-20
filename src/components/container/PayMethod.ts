import { Container }        from '../Container.js';
import { HeadingElement }   from '../elements/Heading.js';

import { createTitle }      from '../../utils/createTitle.js';
import { arrPayMethods }    from '../../utils/arrays.js';

export class PayMethod extends Container{
    
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {
        const h2 = new HeadingElement({
            className   : 'mb-4',
            type        : 'h2'
        });
        h2.addFirstChild([createTitle(title, icon)]);

        const html = `
            ${h2.getHeading().outerHTML}
            <p>Aceptamos los siguientes métodos de pago:</p>
            ${this.createPayMethodsList().outerHTML}`;
        this.setHTML(html);
    }

    private createPayMethodsList (): HTMLUListElement {
        const ul        = document.createElement('ul');
        ul.className    = 'list-unstyled';
        ul.innerHTML    = arrPayMethods.map(method => {
            const li        = document.createElement('li');
            li.textContent  = `- ${method}`;
            return li.outerHTML;
        }).join('');
        return ul;
    }
}