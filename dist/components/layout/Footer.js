import { arrSocialMedia } from '../../utils/arrays.js';
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
        const div1 = document.createElement('div');
        div1.className = 'container pt-0';
        const div2 = document.createElement('div');
        div2.className = 'row justify-content-center';
        const div3 = document.createElement('div');
        div3.className = 'col-12 col-md-8';
        const div3_1 = document.createElement('div');
        div3_1.className = 'row';
        div3_1.innerHTML = this.createSocialMediaButton();
        const hr = document.createElement('hr');
        const div3_2 = document.createElement('div');
        div3_2.className = 'row';
        const div3_2_1 = document.createElement('div');
        div3_2_1.className = 'col-12';
        const h5 = document.createElement('h5');
        h5.textContent = 'Calwill & Fiorella';
        const p = document.createElement('p');
        p.textContent = 'Distribuidores de calzado infantil y calzado para adultos. Comodidad y estilo para toda la familia.';
        div3_2_1.appendChild(h5);
        div3_2_1.appendChild(p);
        div3_2.appendChild(div3_2_1);
        div3.appendChild(div3_1);
        div3.appendChild(hr);
        div3.appendChild(div3_2);
        div2.appendChild(div3);
        div1.appendChild(div2);
        return div1;
    }
    createSocialMediaButton() {
        return arrSocialMedia.map(media => {
            const div = document.createElement('div');
            div.className = 'col-12 col-sm-6 mb-3';
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `btn btn-outline-${media.color} w-100`;
            button.id = `btn_${media.name}`;
            button.textContent = ` ${media.name.charAt(0).toUpperCase() + media.name.slice(1)}`;
            const icon = document.createElement('i');
            icon.className = media.icon;
            button.prepend(icon);
            div.appendChild(button);
            return div.outerHTML;
        }).join('');
    }
}
//# sourceMappingURL=Footer.js.map