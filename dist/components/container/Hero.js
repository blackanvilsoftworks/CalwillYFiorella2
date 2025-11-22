import { Container } from "../Container.js";
import { HeadingElement } from "../elements/Heading.js";
import { ParagraphElement } from "../elements/Paragraph.js";
export class Hero extends Container {
    constructor(id, className) {
        super(id, className);
        this.createHTML();
    }
    createHTML() {
        const h1 = new HeadingElement({
            className: 'display-4 fw-bold mb-4',
            text: 'Calzados para Toda la Familia',
            type: 'h1'
        });
        const p = new ParagraphElement({
            className: 'lead mb-4 fw-semibold',
            text: 'Somos distribuidores de una gran variedad de modelos de calzado infantil y calzado para adultos.'
        });
        const html = `
            ${h1.getHeading().outerHTML}
            ${p.getParagraph().outerHTML}
            <a href="#products-container" class="btn btn-primary btn-lg">Ver Productos</a>`;
        this.setHTML(html);
    }
}
//# sourceMappingURL=Hero.js.map