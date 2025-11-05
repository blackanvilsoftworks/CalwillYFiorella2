import { arrFeatures } from '../../utils/arrays.js';
import { createTitle } from '../../utils/createTitle.js';
import { Container } from '../Container.js';
import { FeatureBoxContainer } from '../ui/FeatureBoxContainer.js';
export class Feature extends Container {
    constructor(id, className, title, icon) {
        super(id, className);
        this.featureBoxes = [];
        this.getFeatureBoxes();
        this.createHTML(title, icon);
    }
    getFeatureBoxes() {
        this.featureBoxes = arrFeatures.map((feature) => {
            return new FeatureBoxContainer(feature.icon, feature.title, feature.description).getContainer();
        });
    }
    createHTML(title, icon) {
        const div1 = document.createElement('div');
        div1.className = 'row justify-content-center';
        const div2 = document.createElement('div');
        div2.className = 'col-10';
        const div3 = document.createElement('div');
        div3.className = 'row';
        const h2 = document.createElement('h2');
        h2.className = 'section-title text-center mb-4';
        h2.appendChild(createTitle(title, icon));
        div3.appendChild(h2);
        this.featureBoxes.forEach((box) => {
            div3.appendChild(box);
        });
        div2.appendChild(div3);
        div1.appendChild(div2);
        this.setHTML(div1.outerHTML);
    }
}
//# sourceMappingURL=Feature.js.map