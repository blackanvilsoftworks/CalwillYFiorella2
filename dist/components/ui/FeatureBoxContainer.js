import { Container } from '../Container.js';
import { DivElement } from '../elements/Div.js';
import { IconElement } from '../elements/Icon.js';
import { HeadingElement } from '../elements/Heading.js';
import { ParagraphElement } from '../elements/Paragraph.js';
export class FeatureBoxContainer extends Container {
    constructor(icon, title, description) {
        super('feature_box_container', 'col-12 col-md-4 mb-4 px-3');
        this.createHTML(icon, title, description);
    }
    createHTML(icon, title, description) {
        const div1 = new DivElement({ className: 'feature-box' });
        const div2 = new DivElement({ className: 'feature-icon' });
        const iElement = new IconElement({ className: icon });
        div2.addLastChild([iElement.getIcon()]);
        const h3 = new HeadingElement({
            type: 'h3',
            text: title
        });
        const pElement = new ParagraphElement({ text: description });
        div1.addLastChild([
            div2.getDiv(),
            h3.getHeading(),
            pElement.getParagraph()
        ]);
        this.setHTML(div1.getDiv().outerHTML);
    }
}
//# sourceMappingURL=FeatureBoxContainer.js.map