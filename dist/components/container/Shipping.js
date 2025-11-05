import { arrShippingOptions } from "../../utils/arrays.js";
import { createTitle } from "../../utils/createTitle.js";
import { Container } from "../Container.js";
export class Shipping extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const div1 = document.createElement('div');
        div1.className = 'row justify-content-center'; // Centramos la fila
        const div2 = document.createElement('div');
        div2.className = 'col-12 col-md-10'; // Limitamos el ancho en pantallas grandes
        const div3 = document.createElement('div');
        div3.className = 'row mx-3 mx-sm-5 px-3';
        const divTitle = document.createElement('div');
        divTitle.className = 'col-md-12';
        const h2 = document.createElement('h2');
        h2.className = 'mb-4';
        h2.appendChild(createTitle(title, icon));
        divTitle.appendChild(h2);
        const divOption0 = document.createElement('div');
        divOption0.className = 'col-12 col-md-4 my-3 my-md-0 px-3';
        divOption0.innerHTML = this.createShippingOption(0);
        const divOption1 = document.createElement('div');
        divOption1.className = 'col-12 col-md-4 mb-3 my-md-0 px-3';
        divOption1.innerHTML = this.createShippingOption(1);
        const divOption2 = document.createElement('div');
        divOption2.className = 'col-12 col-md-4 my-md-0 px-3';
        divOption2.innerHTML = this.createShippingOption(2);
        const divOption3 = document.createElement('div');
        divOption3.className = 'col-12 col-md-8 p-3 shipping_rules_container rounded-3';
        divOption3.innerHTML = this.createShippingOption(3);
        div3.appendChild(divTitle);
        div3.appendChild(divOption0);
        div3.appendChild(divOption1);
        div3.appendChild(divOption2);
        div3.appendChild(divOption3);
        div2.appendChild(div3);
        div1.appendChild(div2);
        this.setHTML(div1.outerHTML);
    }
    createShippingOption(i) {
        var _a, _b;
        if (((_a = arrShippingOptions[i]) === null || _a === void 0 ? void 0 : _a.subtitle) && ((_b = arrShippingOptions[i]) === null || _b === void 0 ? void 0 : _b.description)) {
            return `
                <h4 class="subtitles">${arrShippingOptions[i].subtitle}</h4>
                ${arrShippingOptions[i].description.map((desc) => `
                    <p>${desc}</p>
                `).join('')}`;
        }
        return '';
    }
    ;
}
//# sourceMappingURL=Shipping.js.map