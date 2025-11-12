import {  Container } from '../Container.js';
import { DivElement } from '../elements/Div.js';

export class FeatureBoxContainer extends Container {
    constructor (icon: string, title: string, description: string) {
        super('feature_box_container', 'col-12 col-md-4 mb-4 px-3');
        this.createHTML(icon, title, description);
    }

    private createHTML (icon: string, title: string, description: string): void {
        const div1 = new DivElement({className: 'feature-box'});
        
        const div2 = new DivElement({className: 'feature-icon'});

        const iElement = document.createElement('i');
        iElement.className = icon;
        div2.addLastChild([iElement]);

        const h3Element = document.createElement('h3');
        h3Element.textContent = title;
        
        const pElement = document.createElement('p');
        pElement.textContent = description;

        div1.addLastChild([
            div2.getDiv(),
            h3Element,
            pElement
        ]);
        
        this.setHTML(div1.getDiv().outerHTML);
    }
}