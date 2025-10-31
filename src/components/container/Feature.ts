import { arrFeatures }          from '../../utils/arrays.js';
import { createTitle }          from '../../utils/createTitle.js';

import { Container }            from '../Container.js';
import { FeatureBoxContainer }  from '../ui/FeatureBoxContainer.js';

export class Feature extends Container {
    private featureBoxes: HTMLDivElement[] = [];

    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.getFeatureBoxes();
        this.createHTML(title, icon);
    }

    private getFeatureBoxes (): void {
        this.featureBoxes = arrFeatures.map(feature => new FeatureBoxContainer(feature.icon, feature.title, feature.description).getContainer());
    }

    private createHTML (title: string, icon: string): void {
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