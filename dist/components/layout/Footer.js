import { arrSocialMedia } from '../../utils/arrays.js';
import { ButtonElement } from '../elements/Button.js';
import { DivElement } from '../elements/Div.js';
export class Footer {
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
            return document.createElement('footer');
        }
    }
    createElement(id, className) {
        const nav = document.createElement('footer');
        nav.id = id;
        nav.className = className;
        nav.innerHTML = this.createHTML().outerHTML;
        return nav;
    }
    createHTML() {
        const div1 = new DivElement({ className: 'container pt-0' });
        const div2 = new DivElement({ className: 'row justify-content-center' });
        const div3 = new DivElement({ className: 'col-12 col-md-8' });
        const div3_1 = new DivElement({ className: 'row' });
        div3_1.addLastChild(this.createSocialMediaButton(), 'innerHTML');
        const hr = document.createElement('hr');
        const div3_2 = new DivElement({ className: 'row' });
        const div3_2_1 = new DivElement({ className: 'col-12' });
        const h5 = document.createElement('h5');
        h5.textContent = 'Calwill & Fiorella';
        const p = document.createElement('p');
        p.textContent = 'Distribuidores de calzado infantil y calzado para adultos. Comodidad y estilo para toda la familia.';
        div3_2_1.addLastChild([
            h5,
            p
        ]);
        div3_2.addLastChild([div3_2_1.getDiv()]);
        div3.addLastChild([
            div3_1.getDiv(),
            hr,
            div3_2.getDiv(),
        ]);
        div2.addLastChild([div3.getDiv()]);
        div1.addLastChild([div2.getDiv()]);
        return div1.getDiv();
    }
    createSocialMediaButton() {
        return arrSocialMedia.map(media => {
            const div = new DivElement({ className: 'col-12 col-sm-6 mb-3' });
            const button = new ButtonElement({
                id: `btn_${media.name}`,
                className: `btn btn-outline-${media.color} w-100`,
                text: ` ${media.name.charAt(0).toUpperCase() + media.name.slice(1)}`
            });
            const icon = document.createElement('i');
            icon.className = media.icon;
            button.addLastChild([icon]);
            div.addLastChild([button.getButton()]);
            return div.getDiv().outerHTML;
        }).join('');
    }
}
//# sourceMappingURL=Footer.js.map