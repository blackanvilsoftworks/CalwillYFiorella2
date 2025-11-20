import { Container } from "../Container.js";
import { DivElement } from "../elements/Div.js";
import { arrShippingOptions } from "../../utils/arrays.js";
import { createTitle } from "../../utils/createTitle.js";
import { HeadingElement } from "../elements/Heading.js";
export class Shipping extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.createHTML(title, icon);
    }
    createHTML(title, icon) {
        const div1 = new DivElement({ className: 'row justify-content-center' }); // Centramos la fila
        const div2 = new DivElement({ className: 'col-12 col-md-10' }); // Limitamos el ancho en pantallas grandes
        const div3 = new DivElement({ className: 'row mx-3 mx-sm-5 px-3' });
        const divTitle = new DivElement({ className: 'col-md-12' });
        const h2 = new HeadingElement({
            className: 'mb-4',
            type: 'h2',
            text: createTitle(title, icon).outerHTML
        });
        divTitle.addLastChild([h2.getHeading()]);
        const divOption0 = new DivElement({ className: 'col-12 col-md-4 my-3 my-md-0 px-3' });
        divOption0.addLastChild(this.createShippingOption(0), 'innerHTML');
        const divOption1 = new DivElement({ className: 'col-12 col-md-4 mb-3 my-md-0 px-3' });
        divOption1.addLastChild(this.createShippingOption(1), 'innerHTML');
        const divOption2 = new DivElement({ className: 'col-12 col-md-4 my-md-0 px-3' });
        divOption2.addLastChild(this.createShippingOption(2), 'innerHTML');
        const divOption3 = new DivElement({ className: 'col-12 col-md-8 p-3 shipping_rules_container rounded-3' });
        divOption3.addLastChild(this.createShippingOption(3), 'innerHTML');
        div3.addLastChild([
            divTitle.getDiv(),
            divOption0.getDiv(),
            divOption1.getDiv(),
            divOption2.getDiv(),
            divOption3.getDiv()
        ]);
        div2.addLastChild([div3.getDiv()]);
        div1.addLastChild([div2.getDiv()]);
        this.setHTML(div1.getDiv().outerHTML);
    }
    createShippingOption(i) {
        var _a, _b;
        if (((_a = arrShippingOptions[i]) === null || _a === void 0 ? void 0 : _a.subtitle) && ((_b = arrShippingOptions[i]) === null || _b === void 0 ? void 0 : _b.description)) {
            const h4 = new HeadingElement({
                className: 'subtitles',
                type: 'h4',
                text: arrShippingOptions[i].subtitle
            });
            return `
                ${h4.getHeading().outerHTML}
                ${arrShippingOptions[i].description.map((desc) => `
                    <p>${desc}</p>
                `).join('')}`;
        }
        return '';
    }
    ;
}
//# sourceMappingURL=Shipping.js.map