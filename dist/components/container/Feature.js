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
        this.featureBoxes = arrFeatures.map(feature => new FeatureBoxContainer(feature.icon, feature.title, feature.description).getContainer());
    }
    createHTML(title, icon) {
        const html = `
            <div class="row justify-content-center">
                <div class="col-10">
                    <div class="row">
                        <h2 class="section-title text-center mb-4">
                            ${createTitle(title, icon).outerHTML}
                        </h2>
                        ${this.featureBoxes.map(box => box.outerHTML).join('')}
                    </div>
                </div>
            </div>`;
        this.setHTML(html);
    }
}
//# sourceMappingURL=Feature.js.map