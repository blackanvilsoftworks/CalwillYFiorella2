import { Container } from '../Container.js';
import { DivElement } from '../elements/Div.js';
import { HeadingElement } from '../elements/Heading.js';
export class FeatureBoxContainer extends Container {
    constructor(icon, title, description) {
        super('feature_box_container', 'col-12 col-md-4 mb-4 px-3');
        this.createHTML(icon, title, description);
    }
    createHTML(icon, title, description) {
        const div1 = new DivElement({ className: 'feature-box' });
        const div2 = new DivElement({ className: 'feature-icon' });
        const iElement = document.createElement('i');
        iElement.className = icon;
        div2.addLastChild([iElement]);
        const h3 = new HeadingElement({
            type: 'h3',
            text: title
        });
        const pElement = document.createElement('p');
        pElement.textContent = description;
        div1.addLastChild([
            div2.getDiv(),
            h3.getHeading(),
            pElement
        ]);
        this.setHTML(div1.getDiv().outerHTML);
    }
}
//# sourceMappingURL=FeatureBoxContainer.js.map