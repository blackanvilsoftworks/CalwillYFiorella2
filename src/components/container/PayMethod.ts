import { Container }            from '../Container.js';
import { HeadingElement }       from '../elements/Heading.js';
import { ParagraphElement }     from '../elements/Paragraph.js';
import { ListItemElement }      from '../elements/ListItem.js';
import { UnorderedListElement } from '../elements/UnorderedList.js';

import { createTitle }          from '../../utils/createTitle.js';
import { arrPayMethods }        from '../../utils/arrays.js';

export class PayMethod extends Container{
    
    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.createHTML(title, icon);
    }

    private createHTML (title: string, icon: string): void {
        const h2 = new HeadingElement({ className: 'mb-4', type: 'h2' });
        h2.addFirstChild([createTitle(title, icon)]);

        const p = new ParagraphElement({ text: 'Aceptamos los siguientes métodos de pago:' });

        const html = `
            ${h2.getHeading().outerHTML}
            ${p.getParagraph().outerHTML}
            ${this.createPayMethodsList().outerHTML}`;
        this.setHTML(html);
    }

    private createPayMethodsList (): HTMLUListElement {
        const ul = new UnorderedListElement({ className: 'list-unstyled' });
        
        arrPayMethods.map((method) => {
            const li = new ListItemElement({ text: `- ${method}` });
            ul.addLastChild([li.getListItem()]);
        });

        return ul.getUnorderedList();
    }
}