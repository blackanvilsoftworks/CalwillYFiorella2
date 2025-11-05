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
        this.featureBoxes = arrFeatures.map((feature) => {
            return new FeatureBoxContainer(
                feature.icon, 
                feature.title, 
                feature.description).getContainer();
        });
    }

    private createHTML (title: string, icon: string): void {
        const div1      = document.createElement('div');
        div1.className  = 'row justify-content-center';

        const div2      = document.createElement('div');
        div2.className  = 'col-10';

        const div3      = document.createElement('div');
        div3.className  = 'row';

        const h2        = document.createElement('h2');
        h2.className    = 'section-title text-center mb-4';
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