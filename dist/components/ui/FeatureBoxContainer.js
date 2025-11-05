import { Container } from '../Container.js';
export class FeatureBoxContainer extends Container {
    constructor(icon, title, description) {
        super('feature_box_container', 'col-12 col-md-4 mb-4 px-3');
        this.createHTML(icon, title, description);
    }
    createHTML(icon, title, description) {
        const div1 = document.createElement('div');
        div1.classList.add('feature-box');
        const div2 = document.createElement('div');
        div2.classList.add('feature-icon');
        const iElement = document.createElement('i');
        iElement.className = icon;
        div2.appendChild(iElement);
        div1.appendChild(div2);
        const h3Element = document.createElement('h3');
        h3Element.textContent = title;
        div1.appendChild(h3Element);
        const pElement = document.createElement('p');
        pElement.textContent = description;
        div1.appendChild(pElement);
        this.setHTML(div1.outerHTML);
    }
}
//# sourceMappingURL=FeatureBoxContainer.js.map