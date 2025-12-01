import { Container }            from '../Container.js';
import { DivElement }           from '../elements/Div.js';
import { HeadingElement }       from '../elements/Heading.js';
import { FeatureBoxContainer }  from '../ui/FeatureBoxContainer.js';

import { arrFeatures }          from '../../utils/arrays.js';
import { createTitle }          from '../../utils/createTitle.js';


export class Feature extends Container {
    private featureBoxes: HTMLDivElement[] = [];

    constructor (id: string, className: string, title: string, icon: string) {
        super(id, className);
        this.getFeatureBoxes();
        this.createHTML(title, icon);
    }

    private getFeatureBoxes (): void {
        this.featureBoxes = arrFeatures.map(({icon, title, description}) => {
            return new FeatureBoxContainer(
                icon, 
                title, 
                description).getContainer();
        });
    }

    private createHTML (title: string, icon: string): void {
        const div1  = new DivElement({className: 'row justify-content-center'});
        
        const div2  = new DivElement({className: 'col-10'});

        const div3  = new DivElement({className: 'row'});
        
        const h2    = new HeadingElement({
            type        : 'h2',
            className   : 'section-title text-center mb-4',
        });
        h2.addFirstChild([createTitle(title, icon)]);
        
        div3.addLastChild([h2.getHeading()]);

        this.featureBoxes.map((box) => {
            div3.addLastChild([box]);
        });

        div2.addLastChild([div3.getDiv()]);
        div1.addLastChild([div2.getDiv()]);

        this.setHTML(div1.getDiv().outerHTML);
    }
}